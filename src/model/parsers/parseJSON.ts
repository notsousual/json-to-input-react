import { parseStringArray } from "./parseStringArray";
import { parseString } from "./parseString";
import { parseItems } from "./parseItems";
import { JSONObject } from "../types/JSONObject";

export const parseJSON = ({
  title,
  buttons,
  items,
}: {
  title: unknown;
  buttons: unknown;
  items: unknown;
}): JSONObject => {
  return {
    title: parseString(title),
    buttons: parseStringArray(buttons),
    items: parseItems(items),
  };
};
