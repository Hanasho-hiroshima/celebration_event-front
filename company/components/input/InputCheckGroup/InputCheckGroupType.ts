import { DirectionType } from '@shared/constants/other'

export type InputCheckGroupProp<T = any> = {
  /** 値 */
  readonly modelValue: (number | string)[]
  /** チェックリスト */
  readonly items: T[]
  /** キーのプロパティ */
  readonly itemValueKey: keyof T
  /** 値のプロパティ */
  readonly itemLabelKey: keyof T
  /** 必須可否 */
  readonly required: boolean
  /** 無効フラグ */
  readonly disabled?: boolean
  /** 読み取り専用フラグ */
  readonly readonly?: boolean
  /** 方向 */
  readonly direction: DirectionType
  /** サイズ */
  readonly size: 'small' | 'medium'
}
