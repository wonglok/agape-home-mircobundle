// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import { Canvas } from "@react-three/fiber";
// import { SwanRuntime } from "./Swan/SwanRuntime";
import { Environment, OrbitControls } from "@react-three/drei";
import { CommonSwanHTML, SwanLibRuntime } from "./Swan/SwanLibRuntime";

function App() {
  return (
    <>
      <Canvas>
        {/* <SwanRuntime
          mode={"development"}
          developmentURL={developmentURL}
          productionURL={productionURL}
        ></SwanRuntime> */}

        <SwanLibRuntime></SwanLibRuntime>

        <Environment files={`/hdr/grass.hdr`} background></Environment>

        <OrbitControls></OrbitControls>
      </Canvas>

      <CommonSwanHTML></CommonSwanHTML>
    </>
  );
}

export default App;

//
