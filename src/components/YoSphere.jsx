import { useSwan } from "../store/useSwan";
import { Drei } from "../dx/LibraryCache";
import { useRef, useEffect } from "../dx/ShortCut";
import { Clock } from "three";

let { MeshTransmissionMaterial, Text3D, Center } = Drei;

export function YoSphere() {
  let baseURL = useSwan((r) => r.baseURL);
  let text = useSwan((r) => r.text);

  let tjRef = useRef();

  useEffect(() => {
    let clock = new Clock();
    let lenisScroll = ({ detail }) => {
      // console.log(detail);
      let dt = clock.getDelta();
      let current = detail.animatedScroll;
      let total = detail.dimensions.scrollHeight - detail.dimensions.height;

      let pageHeight = detail.dimensions.height;

      //
      console.log(current / total);

      // console.log(
      //   detail.animatedScroll,
      //   detail.dimensions.scrollHeight - detail.dimensions.height
      // );

      if (tjRef.current) {
        tjRef.current.rotation.y = (current / total) * Math.PI * 2.0;
      }
    };

    window.addEventListener("lenis-scroll", lenisScroll);
    return () => {
      window.removeEventListener("lenis-scroll", lenisScroll);
    };
  }, []);

  return (
    <>
      <group ref={tjRef}>
        <Center>
          <Text3D
            height={0.0125}
            bevelSize={0.025}
            bevelSegments={5}
            bevelThickness={0.1}
            scale={1.5}
            bevelEnabled={true}
            font={`${baseURL}/fonts/days-font/Days_Regular.json`}
          >
            {`${text}`}
            <MeshTransmissionMaterial
              metalness={0}
              roughness={0.1}
              transmission={1}
              thickness={2.3}
              color={"#ffffff"}
              // attenuationDistance={0.5}
              // attenuationColor={"#00ffff"}
            ></MeshTransmissionMaterial>
          </Text3D>
        </Center>
      </group>
    </>
  );
}

//

//

//

//
