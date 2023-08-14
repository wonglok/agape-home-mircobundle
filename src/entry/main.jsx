import { useSwan } from "../store/useSwan";
import {
  useEffect,
  useState,
  Canvas,
  Environment,
  OrbitControls,
} from "../dx/ShortCut";
import { YoSphere } from "../components/YoSphere";
import { FunFunSphere } from "../components/FunFunSphere";

export function SmartObject() {
  //
  return (
    <>
      <group>
        <group position={[-1.5, 0, 0]}>
          <YoSphere></YoSphere>
        </group>
        <group position={[1.5, 0, 0]}>
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
        <>
          <div
            style={{
              position: "absolute",
              top: `0%`,
              right: `0%`,
              width: `100%`,
              height: `100%`,
            }}
            onClick={() => {
              useSwan.setState({ openOverlay: false });
            }}
          ></div>

          <div
            className={` shadow-black shadow-2xl backdrop-blur-lg p-5 bg-gray-800 bg-opacity-10 text-white rounded-2xl`}
            style={{
              position: "absolute",
              top: `25%`,
              right: `25%`,
              width: `50%`,
              height: `50%`,
              border: "1px solid #888",
              boxShadow: "0px 0px 30px 0px #888",
            }}
          >
            Hi dear
          </div>
        </>
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

//
