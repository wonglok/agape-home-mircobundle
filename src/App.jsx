// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import { Canvas } from "@react-three/fiber";
// import { SwanRuntime } from "./Swan/SwanRuntime";
import { Environment, OrbitControls } from "@react-three/drei";
import { CommonSwanHTML, SwanLibRuntime } from "./Swan/SwanLibRuntime";
import { Suspense } from "react";

function App() {
  return (
    <>
      <Canvas>
        {/* <SwanRuntime
          mode={"development"}
          developmentURL={developmentURL}
          productionURL={productionURL}
        ></SwanRuntime> */}
        <Suspense fallback={null}>
          <Environment files={`/hdr/grass.hdr`} background></Environment>
        </Suspense>
        <Suspense fallback={null}>
          <SwanLibRuntime></SwanLibRuntime>
        </Suspense>

        <OrbitControls></OrbitControls>
      </Canvas>

      <CommonSwanHTML></CommonSwanHTML>
    </>
  );
}

export { App };

//
