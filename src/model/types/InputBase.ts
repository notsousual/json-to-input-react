import { InputTypes } from "../enum/InputTypes";
export type InputBase = {
  type: InputTypes;
  label?: string;
  radioItems?: string[];
};
