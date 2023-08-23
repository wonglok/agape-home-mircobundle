// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import { SwanRuntime } from "./Swan/SwanRuntime";
import { Environment, OrbitControls } from "@react-three/drei";

function App() {
  return (
    <>
      <Canvas>
        <SwanRuntime
          mode={"development"}
          developmentURL={"http://localhost:8521"}
        ></SwanRuntime>

        <Environment
          files={`http://localhost:8521/hdr/grass.hdr`}
          background
        ></Environment>

        <OrbitControls></OrbitControls>
      </Canvas>
    </>
  );
}

export default App;