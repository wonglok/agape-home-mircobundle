// import {  } from "@react-three/drei";
import { DoubleSide } from "three";
import { Yo } from "./Yo";
import { Cache } from "./Cache";

let { useEffect, useState } = Cache["react"];
let { useGLTF, OrbitControls, Environment } = Cache["@react-three/drei"];
let { Canvas, createPortal } = Cache["@react-three/fiber"];
let { create } = Cache["zustand"];

export const useCtx = create(() => {
  return {
    baseURL: "",
  };
});

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
  return (
    <>
      <div
        className={``}
        style={{ position: "absolute", top: `0px`, right: `0px` }}
      >
        HTML Overlay Yo
      </div>
    </>
  );
}

export function Preview({ smartObject = null, htmlOverlay = null }) {
  let baseURL = useCtx((r) => r.baseURL);
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

export function Ctx({ children, baseURL, onOK = () => {} }) {
  let [ok, setOK] = useState(false);
  useEffect(() => {
    useCtx.setState({ baseURL: baseURL });
    onOK();
    setOK(true);
  }, [baseURL]);

  return ok ? children : null;
}

function FunFunSphere() {
  let baseURL = useCtx((r) => r.baseURL);
  let glb = useGLTF(`${baseURL}/geometry/sphere.glb`);
  glb.scene = glb.scene.clone(true);

  let arr = [];
  glb.scene.traverse((child) => {
    if (child.material) {
      arr.push(
        createPortal(
          <meshPhysicalMaterial
            color="#ffffff"
            transmission={1}
            roughness={0}
            metalness={0}
            thickness={2}
            side={DoubleSide}
          ></meshPhysicalMaterial>,
          child
        )
      );
    }
  });

  return (
    <>
      {arr}
      <primitive object={glb.scene}></primitive>
    </>
  );
}
