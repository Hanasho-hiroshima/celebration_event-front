/**
 * 1,000,000のようにカンマをつけた文字に変換する
 * @param num - 数値
 * @param preUniStr - 接頭辞単位文字
 * @param sufUnitStr - 接尾辞単位文字
 * @returns
 */
export const formatNumber = (
  num?: number | null,
  preUniStr?: string,
  sufUnitStr?: string
) => {
  if (num == null) {
    return ''
  }
  if (preUniStr == null && sufUnitStr == null) {
    return num.toLocaleString('ja-JP')
  }
  return `${preUniStr != null ? preUniStr : ''}${num.toLocaleString('ja-JP')}${
    sufUnitStr != null ? sufUnitStr : ''
  }`
}
