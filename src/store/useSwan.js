import { LibraryCache } from "./LibraryCache";

let { create } = LibraryCache["zustand"];

export const useSwan = create(() => {
  return {
    openOverlay: false,
    baseURL: "",
  };
});
