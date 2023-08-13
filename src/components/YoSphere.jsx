import { Drei } from "../dx/LibraryCache";

let { Sphere, MeshTransmissionMaterial } = Drei;

export function YoSphere() {
  return (
    <>
      <Sphere>
        <MeshTransmissionMaterial
          metalness={0}
          roughness={0.1}
          transmission={1}
          thickness={2}
          color={"#00ff00"}
        ></MeshTransmissionMaterial>
      </Sphere>
    </>
  );
}
