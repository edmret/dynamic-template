/**
 * create enum from a provide array of strings
 * @param array Values of the enum
 * Example:
 * const Direction = strEnum(['North', 'South', 'East', 'West']);
 * type Direction = keyof typeof Direction;
 * let sample: Direction;
 * sample = Direction.North; // Okay
 */
export function strEnum<T extends string>(o: Array<T>): { [K in T]: K } {
  return o.reduce((res, key) => {
    res[key] = key;
    return res;
  }, Object.create(null));
}
