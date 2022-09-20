export const parseStringArray = (x: unknown): string[] | undefined => {
  if (x instanceof Array) {
    return x.filter((i) => typeof i === "string");
  } else {
    return undefined;
  }
};
