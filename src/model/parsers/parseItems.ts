import { parseStringArray } from "./parseStringArray";
import { InputBase } from "../types/InputBase";
import { parseEnum } from "./parseEnum";
import { parseString } from "./parseString";

export const parseItem = ({
  type,
  label,
  radioItems,
}: InputBase): InputBase => {
  return {
    type: parseEnum(type),
    label: parseString(label),
    radioItems: parseStringArray(radioItems),
  };
};

export const parseItems = (x: unknown) => {
  if (x instanceof Array) {
    return x.map(parseItem);
  } else {
    return undefined;
  }
};
