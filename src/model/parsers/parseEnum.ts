import { InputTypes } from "../enums/InputTypes";

export const parseEnum = (x: unknown): InputTypes => {
  if (Object.values(InputTypes).includes(x as InputTypes)) {
    return x as InputTypes;
  } else {
    return InputTypes.Undefined;
  }
};
