import { DoubleSide } from "three";
import { Drei, Fiber } from "../store/LibraryCache";
import { useSwan } from "../store/useSwan";

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

      <group
        onClick={() => {
          useSwan.setState({ openOverlay: !useSwan.getState().openOverlay });
        }}
      >
        <primitive object={glb.scene}></primitive>
      </group>
    </>
  );
}
