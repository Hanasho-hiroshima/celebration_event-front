import { MenuItem, Select, SelectChangeEvent } from '@mui/material'

export type InputSelectProp<Item extends Record<string, any>> = {
  /** 値 */
  readonly value: Item[keyof Item]
  /** 選択肢 */
  readonly items: Item[]
  /** 選択肢キーのプロパティ */
  readonly itemValueKey: keyof Item
  /** 選択肢値のプロパティ */
  readonly itemLabelKey: keyof Item
  /** 必須可否 */
  readonly required?: boolean
  /** 活性フラグ */
  readonly disabled?: boolean
  /** 読み取り専用フラグ */
  readonly readonly?: boolean
  /** プレースホルダー */
  readonly placeholder?: string
  /** 枠線を入れるか */
  readonly outlined?: boolean
  /** サイズ */
  readonly size?: 'small' | 'medium'
  /** 変更イベント */
  readonly onChange: (e: SelectChangeEvent) => void
}

export const InputSelect = <Item extends Record<string, any>>(
  props: InputSelectProp<Item>
) => {
  const propOutlined = props.outlined || true

  return (
    <Select
      variant={propOutlined ? 'outlined' : 'standard'}
      value={props.value}
      onChange={props.onChange}
      readOnly={props.required}
      disabled={props.disabled}
      placeholder={props.placeholder}
      size={props.size || 'small'}
      fullWidth
    >
      {props.items.map((item) => {
        return (
          <MenuItem
            key={item[props.itemValueKey]}
            value={item[props.itemValueKey]}
          >
            {item[props.itemLabelKey]}
          </MenuItem>
        )
      })}
    </Select>
  )
}
