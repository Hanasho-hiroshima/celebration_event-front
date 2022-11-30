/**
 * Nullを除去するハンドラー関数(filter関数とセットで使う)
 * @param item - 項目
 */
export const omitNullableHandler = <T>(item: T): item is NonNullable<T> => {
  return item != null
}
