import React, { ChangeEvent } from 'react'
import { DirectionType, DIRECTION_TYPE } from '@packs/constants/other'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'

export type InputCheckGroupProp<Item extends Record<string, any>> = {
  /** 値 */
  readonly value: (number | string)[]
  /** チェックリスト */
  readonly items: Item[]
  /** キーのプロパティ */
  readonly itemValueKey: keyof Item
  /** 値のプロパティ */
  readonly itemLabelKey: keyof Item
  /** 必須可否 */
  readonly required?: boolean
  /** 無効フラグ */
  readonly disabled?: boolean
  /** 読み取り専用フラグ */
  readonly readonly?: boolean
  /** 方向 */
  readonly direction?: DirectionType
  /** サイズ */
  readonly size?: 'small' | 'medium'
  /** 変更イベント */
  readonly onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export const InputCheckGroup = function <Item extends Record<string, any>>(
  props: InputCheckGroupProp<Item>
) {
  const propDirection = props.direction || DIRECTION_TYPE.Horizontal

  return (
    <FormGroup row={propDirection === DIRECTION_TYPE.Horizontal}>
      {props.items.map((item, index) => {
        return (
          <FormControlLabel
            key={index}
            control={
              <Checkbox
                disabled={props.disabled || item.disabled}
                size={props.size}
                required={props.required}
                checked={props.value.includes(item[props.itemValueKey])}
                onChange={props.readonly ? undefined : props.onChange}
                value={item[props.itemValueKey]}
              />
            }
            label={item[props.itemLabelKey]}
          />
        )
      })}
    </FormGroup>
  )
}
