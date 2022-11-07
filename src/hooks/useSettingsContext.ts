import { createContext, useContext } from "react";
import { UseSettings } from "./useSettings";

export const SettingsContext = createContext<UseSettings | undefined>(
  undefined,
);

export const useSettingsContext = (): UseSettings => {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error('This component must be used within a Settings component.');
  }
  return context;
};