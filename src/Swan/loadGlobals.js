import * as React from "react";
export const loadGlobals = async ({ globals: array }) => {
  window["React"] = React;
  window.Globals = window.Globals || {};
  let res = array
    .filter((r) => {
      return r.needs;
    })
    .map(async (r) => {
      let name = r.name;

      if (!window.Globals[name] && name === "react") {
        window.Globals["react"] = await import("react");
      }
      if (!window.Globals[name] && name === "three") {
        window.Globals["three"] = await import("three");
      }
      if (!window.Globals[name] && name === "zustand") {
        window.Globals["zustand"] = await import("zustand");
      }

      if (!window.Globals[name] && name === "@react-three/fiber") {
        window.Globals["@react-three/fiber"] = await import(
          "@react-three/fiber"
        );
      }
      if (!window.Globals[name] && name === "@react-three/drei") {
        window.Globals["@react-three/drei"] = await import("@react-three/drei");
      }
      if (!window.Globals[name] && name === "@react-three/postprocessing") {
        window.Globals["@react-three/postprocessing"] = await import(
          "@react-three/postprocessing"
        );
      }
      if (!window.Globals[name] && name === "@react-three/xr") {
        window.Globals["@react-three/xr"] = await import("@react-three/xr");
      }
      if (!window.Globals[name] && name === "three-stdlib") {
        window.Globals["three-stdlib"] = await import("three-stdlib");
      }
    })
    .map((r) => {
      r.catch((err) => {
        console.log(err);
      });
      return r;
    });

  await Promise.all(res);
};
