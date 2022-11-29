import { DirectionType } from 'shared/constants/other'
type InputRadioGroupValue = number | string | boolean | null

export type InputRadioGroupProp = {
  /** 値 */
  readonly modelValue: InputRadioGroupValue
  /** チェックリスト */
  readonly items: any[]
  /** キーのプロパティ */
  readonly itemValueKey: string
  /** 値のプロパティ */
  readonly itemLabelKey: string
  /** 方向 */
  readonly direction: DirectionType
  /** 必須可否 */
  readonly required: boolean
  /** 活性フラグ */
  readonly disabled: boolean
  /** エラーメッセージ */
  readonly errorMessages: string[]
}
