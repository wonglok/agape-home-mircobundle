import { useSwan } from "src-swan/store/useSwan";

export async function preload({ loadGlobals, baseURL }) {
  if (baseURL) {
    if (baseURL[baseURL.length - 1] === "/") {
      baseURL = baseURL.slice(0, baseURL.length - 1);
    }
  }

  useSwan.setState({ baseURL });
  await loadGlobals({
    globals: [
      /// essentials
      { name: "react", needs: true },
      { name: "three", needs: true },
      { name: "zustand", needs: true },
      { name: "@react-three/fiber", needs: true },
      { name: "@react-three/drei", needs: true },

      // advanced
      { name: "@react-three/postprocessing", needs: false },
      { name: "@react-three/xr", needs: false },
      { name: "three-stdlib", needs: false },
      { name: "agape-sdk", needs: false },
    ],
  });
}
