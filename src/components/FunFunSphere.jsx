import { useSwan } from "../store/useSwan";
import { useGLTF, createPortal, MeshRefractionMaterial } from "../dx/ShortCut";
import { Drei } from "../dx/LibraryCache";
let { CubeCamera, useEnvironment, MeshTransmissionMaterial } = Drei;

export function FunFunSphere() {
  let baseURL = useSwan((r) => r.baseURL);
  let glb = useGLTF(`${baseURL}/geometry/box.glb`);
  glb.scene = glb.scene.clone(true);

  let arr = [];

  let geo = false;
  glb.scene.traverse((child) => {
    if (child.geometry && !geo) {
      geo = child.geometry;
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
        <mesh geometry={geo}>
          <MeshTransmissionMaterial
            transmission={1}
            thickness={2}
            roughness={0.13}
            metalness={0}
            reflectivity={0.5}
            chromaticAberration={0.1}
            color={"#ffffff"}
          ></MeshTransmissionMaterial>
        </mesh>
      </group>
    </>
  );
}
