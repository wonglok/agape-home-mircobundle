// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import { Canvas } from "@react-three/fiber";
// import { SwanRuntime } from "./Swan/SwanRuntime";
import { Environment, OrbitControls } from "@react-three/drei";
import { LocalSwanHTML, LocalSwanRuntime } from "./Swan/LocalSwanRuntime";
import { Suspense } from "react";
import { RemoteSwanRuntime, RemoteSwanHTML } from "./Swan/RemoteSwanRuntime";

function App() {
  return (
    <>
      <Canvas>
        <group position={[0, 3, 0]}>
          <Suspense fallback={null}>
            <LocalSwanRuntime></LocalSwanRuntime>
          </Suspense>
        </group>

        <group position={[0, -3, 0]}>
          <Suspense fallback={null}>
            <RemoteSwanRuntime
              baseURL={`http://localhost:5174`}
            ></RemoteSwanRuntime>
          </Suspense>
        </group>

        <Suspense fallback={null}>
          <Environment files={`/hdr/grass.hdr`} background></Environment>
        </Suspense>
        <OrbitControls object-position={[0, 0, 10]}></OrbitControls>
      </Canvas>

      <LocalSwanHTML></LocalSwanHTML>
      <RemoteSwanHTML></RemoteSwanHTML>
    </>
  );
}

export { App };
