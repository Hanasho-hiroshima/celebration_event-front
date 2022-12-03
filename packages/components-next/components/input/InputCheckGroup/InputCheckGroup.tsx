import { FC } from 'react'
import { DirectionType, DIRECTION_TYPE } from '@packs/constants/other'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'

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

export const InputCheckGroup: FC<InputCheckGroupProp> = (props) => {
  const items = props.items || []
  const itemValueKey = props.itemValueKey || 'value'
  const itemLabelKey = props.itemLabelKey || 'label'
  const required = props.required || false
  const disabled = props.disabled || false
  // const readonly = props.readonly || false
  const direction = props.direction || DIRECTION_TYPE.Horizontal
  const size = props.size || 'medium'

  return (
    <FormGroup row={direction === DIRECTION_TYPE.Horizontal}>
      {items.map((item, index) => {
        return (
          <FormControlLabel
            key={index}
            control={
              <Checkbox
                disabled={disabled || item.disabled}
                size={size}
                required={required}
                value={item[itemValueKey]}
              />
            }
            label={item[itemLabelKey]}
          />
        )
      })}
    </FormGroup>
  )
}
