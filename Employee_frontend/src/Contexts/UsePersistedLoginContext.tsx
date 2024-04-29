import { useContext } from "react";
import { PersistedLoginContext } from "./PersistedLoginContext";

export function usePersistedLoginContext() {
  const context = useContext(PersistedLoginContext);
  if (!context) {
    throw new Error(
      "usePersistedLogin must be used within a PersistedLoginProvider"
    );
  }
  return context;
}
