import React, { FC } from 'react'
import { DirectionType, DIRECTION_TYPE } from '@packs/constants/other'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'

export type InputCheckGroupProp<T = any> = {
  /** 値 */
  readonly value: (number | string)[]
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
  /** 変更関数 */
  readonly onHandleChange: (value: number | string) => void
}

export const InputCheckGroup: FC<InputCheckGroupProp> = (props) => {
  const value = props.value || []
  const items = props.items || []
  const itemValueKey = props.itemValueKey || 'value'
  const itemLabelKey = props.itemLabelKey || 'label'
  const required = props.required || false
  const disabled = props.disabled || false
  const readonly = props.readonly || false
  const direction = props.direction || DIRECTION_TYPE.Horizontal
  const size = props.size || 'medium'

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.onHandleChange(event.target.value)
  }

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
                checked={value.includes(item[itemValueKey])}
                onChange={readonly ? undefined : handleChange}
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
