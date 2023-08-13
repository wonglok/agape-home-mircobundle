import { useSwan } from "../store/useSwan";
import { Drei } from "../dx/LibraryCache";

let { Sphere, MeshTransmissionMaterial, Text3D, Center } = Drei;

export function YoSphere() {
  let baseURL = useSwan((r) => r.baseURL);
  return (
    <>
      <Center>
        <Text3D
          scale={2}
          bevelEnabled={true}
          font={`${baseURL}./fonts/days-font/Days_Regular.json`}
        >
          {`//`}
          <MeshTransmissionMaterial
            metalness={0}
            roughness={0.1}
            transmission={1}
            thickness={2.3}
            color={"#ffffff"}
          ></MeshTransmissionMaterial>
        </Text3D>
      </Center>
    </>
  );
}
