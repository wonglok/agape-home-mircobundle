import { Yo } from "./Objects/Yo";
import { FunFunSphere } from "./Objects/FunFunSphere";
import { useSwan } from "./store/useSwan";
import { Drei, Fiber, React, useEffect, useState } from "./store/LibraryCache";

let { OrbitControls, Environment } = Drei;
let { Canvas } = Fiber;

export function SmartObject() {
  return (
    <>
      <group>
        <group position={[1, 0, 0]}>
          <Yo></Yo>
        </group>
        <group position={[-1, 0, 0]}>
          <FunFunSphere></FunFunSphere>
        </group>
      </group>
    </>
  );
}

export function HTMLOverlay() {
  let openOverlay = useSwan((r) => r.openOverlay);
  return (
    <>
      {openOverlay && (
        <div
          className={``}
          style={{ position: "absolute", top: `0px`, right: `0px` }}
        >
          HTML Overlay
        </div>
      )}
    </>
  );
}

export function SwanLake({
  children,
  baseURL,
  onAsyncPreload = async () => {},
  preloader = null,
  onReady = () => {},
}) {
  let [ok, setOK] = useState(false);
  useEffect(() => {
    useSwan.setState({ baseURL: baseURL });
    onAsyncPreload().then(() => {
      onReady();
      setOK(true);
    });
  }, [baseURL]);

  return ok ? children : preloader;
}

export function Preview({ smartObject = null, htmlOverlay = null }) {
  let baseURL = useSwan((r) => r.baseURL);
  return (
    <>
      <Canvas>
        {smartObject}

        <OrbitControls></OrbitControls>

        <Environment
          background
          files={`${baseURL}/hdr/grass.hdr`}
        ></Environment>
      </Canvas>
      {htmlOverlay}
    </>
  );
}
//
