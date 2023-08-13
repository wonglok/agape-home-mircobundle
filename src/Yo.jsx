import { Drei } from "./LibraryCache";

let { Sphere, MeshTransmissionMaterial } = Drei;

export function Yo() {
  return (
    <>
      <Sphere>
        <MeshTransmissionMaterial
          metalness={0}
          roughness={0.1}
          transmission={1}
          thickness={2}
        ></MeshTransmissionMaterial>
      </Sphere>
    </>
  );
}
