import { LibraryCache } from "./LibraryCache";
let Sphere = LibraryCache["@react-three/drei"].Sphere;

export function Yo() {
  return (
    <>
      <Sphere>
        <meshStandardMaterial
          metalness={1}
          roughness={0.3}
          emissive="#000fff"
        ></meshStandardMaterial>
      </Sphere>
    </>
  );
}
