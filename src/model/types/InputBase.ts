import { InputTypes } from "../enums/InputTypes";
export type InputBase = {
  type: InputTypes;
  label?: string;
  radioItems?: string[];
};
