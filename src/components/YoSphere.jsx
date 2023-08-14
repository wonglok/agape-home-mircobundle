import { useSwan } from "../store/useSwan";
import { Drei } from "../dx/LibraryCache";
import { useRef, useEffect } from "../dx/ShortCut";
import { Clock } from "three";

let { Sphere, MeshTransmissionMaterial, Text3D, Center } = Drei;

export function YoSphere() {
  let baseURL = useSwan((r) => r.baseURL);

  let tjRef = useRef();

  useEffect(() => {
    let clock = new Clock();
    window.addEventListener("lenis-scroll", ({ detail }) => {
      // console.log(detail);
      let dt = clock.getDelta();

      if (tjRef.current) {
        tjRef.current.rotation.y += detail.velocity * dt * 0.5;
      }
    });
  }, []);

  return (
    <>
      <group ref={tjRef}>
        <Center>
          <Text3D
            scale={2}
            bevelEnabled={true}
            font={`${baseURL}./fonts/days-font/Days_Regular.json`}
          >
            {`TJ`}
            <MeshTransmissionMaterial
              metalness={0}
              roughness={0.1}
              transmission={1}
              thickness={2.3}
              color={"#ffffff"}
            ></MeshTransmissionMaterial>
          </Text3D>
        </Center>
      </group>
    </>
  );
}
