/**
 * TypeScriptで型をチェックするために素振りする関数
 * @returns
 */
export const typeChecker = <T>() => {
  return <U extends T>(checkVar: U) => {
    return checkVar
  }
}
