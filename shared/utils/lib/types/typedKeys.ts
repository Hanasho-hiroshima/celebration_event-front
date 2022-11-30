/**
 * 型がついたObject.keys
 * @param obj - オブジェクト
 */
export const typedKeys = <T>(obj: T): Array<keyof T> => {
  return Object.keys(obj) as Array<keyof T>
}
