import { useSwan } from "../store/useSwan";
import { useGLTF, createPortal } from "../dx/ShortCut";
import { Drei } from "../dx/LibraryCache";

let { MeshTransmissionMaterial } = Drei;

export function FunFunSphere() {
  let baseURL = useSwan((r) => r.baseURL);
  let glb = useGLTF(`${baseURL}/geometry/pineapple.glb`);
  glb.scene = glb.scene.clone(true);

  let geo = false;
  glb.scene.traverse((it) => {
    if (it.geometry && !geo) {
      geo = it.geometry;
    }
  });

  return (
    <>
      <group
        onClick={() => {
          useSwan.setState({ openOverlay: !useSwan.getState().openOverlay });
        }}
      >
        <mesh geometry={geo}>
          <MeshTransmissionMaterial
            transmission={1}
            thickness={3}
            roughness={0.13}
            metalness={0}
            reflectivity={0.5}
            chromaticAberration={0.3}
            color={"#ffffff"}
          ></MeshTransmissionMaterial>
        </mesh>
      </group>
    </>
  );
}

//
