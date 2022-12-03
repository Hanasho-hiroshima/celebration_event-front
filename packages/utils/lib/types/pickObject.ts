import { pick } from 'lodash-es'

/**
 * 必要な項目だけ抽出する。lodashのpickから第一階層のkeyからしか取得できないように制限
 * @param obj
 * @param keys
 * @returns
 */
export const pickObject = <T extends object, K extends keyof T>(
  obj: T,
  keys: readonly K[]
): Pick<T, K> => {
  return pick(obj, keys)
}
