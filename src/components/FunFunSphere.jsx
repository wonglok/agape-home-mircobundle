import { DoubleSide } from "three";
import { useSwan } from "../store/useSwan";
import { useGLTF, createPortal } from "../dx/ShortCut";

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
            color="#00ffff"
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
