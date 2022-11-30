/**
 * 型がついたObject.keys
 * @param obj - オブジェクト
 */
export const typedKeys = <T>(obj: T): Array<keyof T> => {
  //@ts-ignore
  return Object.keys(obj) as Array<keyof T>
}
