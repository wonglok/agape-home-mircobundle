import { Yo } from "./Yo";
import { FunFunSphere } from "./FunFunSphere";
import { useSwan } from "./useSwan";
import {
  Drei,
  Fiber,
  React,
  useEffect,
  useCallback,
  useState,
} from "./LibraryCache";

let { useGLTF, OrbitControls, Environment } = Drei;
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
  let cb = useCallback(() => {});
  return (
    <>
      <div
        className={``}
        onClick={cb}
        style={{ position: "absolute", top: `0px`, right: `0px` }}
      >
        HTML Overlay Yo
      </div>
    </>
  );
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

export function SwanLake({
  children,
  baseURL,
  onAsyncPreload = async () => {},
  onReady = () => {},
}) {
  let [ok, setOK] = useState(false);
  useEffect(() => {
    useSwan.setState({ baseURL: baseURL });
    useGLTF.preload(`${baseURL}/geometry/sphere.glb`);
    onAsyncPreload().then(() => {
      onReady();
      setOK(true);
    });
  }, [baseURL]);

  return ok ? children : null;
}
