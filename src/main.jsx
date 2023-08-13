import { YoSphere } from "./components/YoSphere";
import { FunFunSphere } from "./components/FunFunSphere";
import { useSwan } from "./store/useSwan";
import {
  useEffect,
  useState,
  Canvas,
  Environment,
  OrbitControls,
} from "./dx/ShortCut";

export function SmartObject() {
  return (
    <>
      <group>
        <group position={[1, 0, 0]}>
          <YoSphere></YoSphere>
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
          HTML Overlay 123
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
