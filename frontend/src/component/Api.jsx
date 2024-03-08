import { createContext } from "react";

export const DataContext = createContext({
  place: null,
  setPlace: () => {},
  isUpdated: null,
  setIsUpdated: () => {},
});
