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
        <CubeCamera>
          {(tt) => {
            return (
              <mesh geometry={geo}>
                <MeshTransmissionMaterial
                  transmission={1}
                  envMap={tt}
                  thickness={1}
                  backsideThickness={3}
                  backside={true}
                  roughness={0.034}
                  metalness={0}
                ></MeshTransmissionMaterial>
              </mesh>
            );
          }}
        </CubeCamera>
      </group>
    </>
  );
}

//
