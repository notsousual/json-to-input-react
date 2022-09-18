import { createContext, Dispatch, SetStateAction } from "react";
import defaultValues from "../model/defaultValues.json";

type ConfigContextType = {
  data: string;
  updateData: Dispatch<SetStateAction<string>>;
};

export const ConfigContextDefaultValue: ConfigContextType = {
  data: JSON.stringify(defaultValues),
  updateData: () => JSON.stringify(defaultValues),
};

export const ConfigContext = createContext<ConfigContextType>(
  ConfigContextDefaultValue
);
