// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import { Canvas } from "@react-three/fiber";
// import { SwanRuntime } from "./Swan/SwanRuntime";
import { Environment, OrbitControls } from "@react-three/drei";
import { LocalSwanHTML } from "./Swan/LocalSwanRuntime";
import { Suspense } from "react";
import { RemoteSwanRuntime, RemoteSwanHTML } from "./Swan/RemoteSwanRuntime";

function App() {
  return (
    <>
      <Canvas>
        {/* <LocalSwanRuntime
          mode={"development"}
          developmentURL={developmentURL}
          productionURL={productionURL}
        ></LocalSwanRuntime> */}
        <Suspense fallback={null}>
          <Environment files={`/hdr/grass.hdr`} background></Environment>
        </Suspense>

        <Suspense fallback={null}>
          <RemoteSwanRuntime
            baseURL={`http://localhost:5174`}
          ></RemoteSwanRuntime>
          {/* <SwanLibRuntime></SwanLibRuntime> */}
        </Suspense>

        <OrbitControls></OrbitControls>
      </Canvas>

      <LocalSwanHTML></LocalSwanHTML>
      <RemoteSwanHTML></RemoteSwanHTML>
    </>
  );
}

export { App };
