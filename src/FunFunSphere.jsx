import { DoubleSide } from "three";
import { Drei, Fiber } from "./LibraryCache";
import { useSwan } from "./useSwan";

let createPortal = Fiber.createPortal;
let useGLTF = Drei.useGLTF;

export function FunFunSphere() {
  let baseURL = useSwan((r) => r.baseURL);
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
