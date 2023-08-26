// import * as THREE from 'three'
// import * as Zustand from 'zustand'
// // import * as R3F from
// import * as ReactThreeFiber from '@react-three/fiber'
// import * as ReactThreeDrei from '@react-three/drei'
// import * as ReactThreePostProc from '@react-three/postprocessing'
// import * as ReactThreeXR from '@react-three/xr'
// import * as THREESTDLIB from 'three-stdlib'

import { useEffect } from "react";
import * as React from "react";
// import { io } from 'socket.io-client'
import tunnel from "tunnel-rat";
import { loadGlobals } from "./loadGlobals";

let t = tunnel();

export function RemoteSwanHTML() {
  return <t.Out></t.Out>;
}

export function RemoteSwanRuntime({ baseURL }) {
  let [insertCTX, setInsertCTX] = React.useState(null);
  let [insert3D, setInsert3D] = React.useState(null);
  let [insertHTML, setInsertHTML] = React.useState(null);

  useEffect(() => {
    let socket = false;

    let run = async ({ loaderUtils, socket }) => {
      let loadCode = (i = 0) => {
        loaderUtils
          .load(
            `${baseURL}/main.module.js?hash=${encodeURIComponent(
              "_" + Math.random()
            )}}`
          )
          .then(
            (r) => {
              //
              if (
                r &&
                typeof r.SmartObject === "function" &&
                typeof r.HTMLOverlay === "function"
              ) {
                console.log("Refreshing...");

                setInsertCTX(
                  <React.Suspense fallback={null}>
                    <r.SmartObject></r.SmartObject>
                    <t.In>
                      <r.HTMLOverlay></r.HTMLOverlay>
                    </t.In>
                  </React.Suspense>
                );
              } else {
                if (i < 10) {
                  console.log("Retrying..." + i);

                  setTimeout(() => {
                    i = i + 1;
                    loadCode(i);
                  }, 1000);
                }
              }
            },
            (err) => {
              console.log(err);
              setInsertCTX(null);
              setInsert3D(null);
              setInsertHTML(null);
            }
          );
      };

      if (socket) {
        let ttt = 0;
        socket.on("reload", (ev) => {
          clearTimeout(ttt);
          ttt = setTimeout(() => {
            loadCode(0);
          }, 100);
        });
      }

      loadCode();
    };

    //
    getLoader().then(async (loaderUtils) => {
      let isDev = await fetch(`${baseURL}/heartheat`)
        .then((r) => r.ok && r.json())
        .then((r) => r.heartbeat === "ok")
        .catch((r) => {
          console.log(r);
          return r;
        });

      let io = isDev
        ? await import("socket.io-client").then((r) => r.io)
        : false;

      socket = isDev ? io && io(`${baseURL}`, {}) : false;

      await loaderUtils
        .load(
          `${baseURL}/preload.module.js?hash=${encodeURIComponent(
            "_" + Math.random()
          )}}`
        )
        .then((mod) => {
          return mod.preload({ loadGlobals: loadGlobals });
        })
        .catch((err) => {
          console.log(err);
        });

      return run({ loaderUtils, socket });
    });

    // run()
    //

    return () => {
      if (socket) {
        socket.disconnect();
        socket.close();
      }
    };
  }, [baseURL]);
  return (
    <>
      {insertCTX}
      <t.In>{insertHTML}</t.In>
      {insert3D}
    </>
  );
}

export const DefaultSetting = {
  onFetch: ({ url, options }) => {
    return fetch(url, {
      ...options,
      mode: "cors",
    });
  },
  onResolve: ({ id, parentUrl, resolve }) => {
    if (parentUrl.indexOf("blob:") === 0) {
      return resolve(id, "");
    }
    return resolve(id, parentUrl);
  },
};

export const getLoader = async ({
  onResolve = () => {},
  onFetch = () => {},
} = DefaultSetting) => {
  let res = document.body.querySelector("#importmap");

  if (!res) {
    document.body.appendChild(
      Object.assign(document.createElement("script"), {
        id: "importmap",
        type: "importmap-shim",
        innerHTML: JSON.stringify({
          imports: {},
        }),
      })
    );

    // document.body.appendChild(
    //   Object.assign(document.createElement('script'), {
    //     id: 'esms-options',
    //     innerHTML: JSON.stringify({
    //       shimMode: true,
    //     }),
    //   })
    // )
  }

  return new Promise(async (resolve) => {
    window.esmsInitOptions = {
      // Enable Shim Mode
      shimMode: true, // default false
      // Enable newer modules features
      polyfillEnable: ["css-modules", "json-modules"], // default empty
      // Custom CSP nonce
      nonce: "n0nce", // default is automatic detection
      // Don't retrigger load events on module scripts
      noLoadEventRetriggers: true, // default false
      // Skip source analysis of certain URLs for full native passthrough
      // skip: /^https:\/\/cdn\.com/, // defaults to null
      // Clean up blob URLs after execution
      revokeBlobURLs: true, // default false
      // Secure mode to not support loading modules without integrity (integrity is always verified though)
      enforceIntegrity: false, // default false
      // Permit overrides to import maps
      mapOverrides: true, // default false

      // -- Hooks --
      // Module load error
      onerror: (e) => {
        /*...*/
      }, // default noop
      // Called when polyfill mode first engages
      onpolyfill: () => {}, // default logs to the console
      // Hook all module resolutions
      resolve: (id, parentUrl, resolve) => {
        return onResolve({ id, parentUrl, resolve });
        // return resolve(id, parentUrl)
      }, // default is spec resolution
      // Hook source fetch function
      fetch: (url, options) => {
        //fetch(url, options)
        return onFetch({ url, options });
      }, // default is native
      // Hook import.meta construction
      meta: (meta, url) => {}, // default is noop
      // Hook top-level imports
      onimport: (url, options, parentUrl) => {
        // console.log('onimport', url, options, parentUrl)
      }, // default is noop
    };

    await import("es-module-shims");

    let tt = setInterval(() => {
      if (window.importShim) {
        clearInterval(tt);
        resolve({
          load: window.importShim,
          addImportMap: window.importShim.addImportMap,
        });
      }
    });
  });
};

//
