import { Suspense, useEffect, useState } from "react";
import { loadGlobals } from "./loadGlobals.js";
import tunnel from "tunnel-rat";

const t = tunnel();

export function CommonSwanHTML() {
  return <t.Out></t.Out>;
}

export function SwanLibRuntime() {
  let [o3d, set3D] = useState(false);
  useEffect(() => {
    (async function Yo() {
      set3D(false);
      let Preload = await import("../../src-swan/entry/preload.js");
      Preload.preload({ loadGlobals }).then(() => {
        import("../../src-swan/entry/main.jsx").then((SW) => {
          set3D(
            <Suspense fallback={null}>
              <SW.SmartObject></SW.SmartObject>
              <t.In>
                <SW.HTMLOverlay></SW.HTMLOverlay>
              </t.In>
            </Suspense>
          );
        });
      });
    })();
  }, []);

  return (
    <>
      {/*  */}

      {o3d && <>{o3d}</>}

      {/*  */}
    </>
  );
}
