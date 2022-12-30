import React, { ChangeEvent, FC } from 'react'
import { DirectionType, DIRECTION_TYPE } from '@packs/constants/other'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'

export type InputRadioGroupValue = number | string | boolean | null

export type InputRadioGroupProp = {
  /** 値 */
  readonly value: InputRadioGroupValue
  /** チェックリスト */
  readonly items: any[]
  /** キーのプロパティ */
  readonly itemValueKey?: string
  /** 値のプロパティ */
  readonly itemLabelKey?: string
  /** 方向 */
  readonly direction?: DirectionType
  /** 活性フラグ */
  readonly disabled?: boolean
  /** 読み取り専用 */
  readonly readonly?: boolean
  /** 変更関数 */
  readonly onHandleChange: (value: InputRadioGroupValue) => void
  /** 変更イベント */
  readonly onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export const InputRadioGroup: FC<InputRadioGroupProp> = (props) => {
  const value = props.value || null
  const items = props.items || null
  const itemValueKey = props.itemValueKey || 'value'
  const itemLabelKey = props.itemLabelKey || 'label'
  const direction = props.direction || DIRECTION_TYPE.Horizontal
  const disabled = props.disabled || false
  const readonly = props.readonly || false

  return (
    <RadioGroup
      row={direction === DIRECTION_TYPE.Horizontal}
      value={value}
      aria-labelledby="demo-row-radio-buttons-group-label"
      onChange={readonly ? undefined : props.onChange}
      name="row-radio-buttons-group"
    >
      {items.map((item, index) => {
        return (
          <FormControlLabel
            value={item[itemValueKey]}
            label={item[itemLabelKey]}
            disabled={item.disabled || disabled}
            control={<Radio />}
            key={index}
          />
        )
      })}
    </RadioGroup>
  )
}
