let { Sphere } = window.Globals["@react-three/drei"];

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
