import { createContext, Dispatch, SetStateAction } from "react";
import defaultValues from "../model/defaultValues.json";
import { JSONObject } from "../model/types/JSONObject";

type ConfigContextType = {
  data: undefined | JSONObject;
  updateData: Dispatch<SetStateAction<JSONObject | undefined>>;
};

export const ConfigContextDefaultValue: ConfigContextType = {
  data: defaultValues as JSONObject,
  updateData: () => defaultValues as JSONObject,
};

export const ConfigContext = createContext<ConfigContextType>(
  ConfigContextDefaultValue
);
