import { useSwan } from "../store/useSwan";
import { useGLTF, createPortal, useFrame } from "../dx/ShortCut";
import { Drei, React, Fiber } from "../dx/LibraryCache";

let { MeshTransmissionMaterial } = Drei;
let { useRef } = React;

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

  let ball = useRef();
  useFrame((st, dt) => {
    //
    ball.current.rotation.x += 1.1 * dt;
    ball.current.rotation.y += 1.1 * dt;
    ball.current.scale.setScalar(
      (0.5 + 0.5 * Math.sin(st.clock.elapsedTime * 3.0)) * 2.0
    );

    ball.current.position.z =
      0.5 + 0.5 * Math.sin(st.clock.elapsedTime * 3.0) * 2.5;
  });

  return (
    <>
      <group
        onClick={() => {
          useSwan.setState({ openOverlay: !useSwan.getState().openOverlay });
        }}
      >
        <mesh ref={ball} geometry={geo}>
          <MeshTransmissionMaterial
            transmission={1}
            thickness={0.5}
            roughness={0.1}
            metalness={0.05}
            reflectivity={0.8}
            chromaticAberration={0.3}
            color={"#ffffff"}
          ></MeshTransmissionMaterial>
        </mesh>
      </group>
    </>
  );
}

//
