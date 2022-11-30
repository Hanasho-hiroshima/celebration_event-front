import dayjs from 'dayjs'

/**
 * タイムゾーン込みの日付文字列をフォーマットする
 * @param dateStr - 日付文字列
 * @param format - フォーマット形式
 * @returns
 */
export const formatDate = (
  dateStr: dayjs.Dayjs | string | null,
  format: string
) => {
  if (!dateStr) {
    return ''
  }
  return dayjs(dateStr).format(format)
}
