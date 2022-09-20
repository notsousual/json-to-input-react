export const parseString = (x: unknown): string | undefined => {
  if (typeof x === "string" || typeof x === "number") {
    return x as string;
  } else {
    return undefined;
  }
};
