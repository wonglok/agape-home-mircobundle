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
          thickness={1.3}
          color={"#ffffff"}
        ></MeshTransmissionMaterial>
      </Sphere>
    </>
  );
}
