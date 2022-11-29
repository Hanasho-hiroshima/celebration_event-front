import React, { FC } from 'react'
import { DIRECTION_TYPE } from 'shared/constants/other'
import { InputRadioGroupProp } from './InputRadioGroupType'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'

export const InputRadioGroup: FC<InputRadioGroupProp> = (props) => {
  return (
    <RadioGroup
      row={props.direction === DIRECTION_TYPE.Horizontal ? true : false}
      aria-labelledby="demo-row-radio-buttons-group-label"
      name="row-radio-buttons-group"
    >
      {props.items.map((item, index) => {
        return (
          <FormControlLabel
            value={item[props.itemValueKey]}
            label={item[props.itemLabelKey]}
            disabled={item.disabled || props.disabled}
            control={<Radio />}
            key={index}
          />
        )
      })}
    </RadioGroup>
  )
}

/** Propsの初期値設定 */
InputRadioGroup.defaultProps = {
  modelValue: null,
  items: [],
  itemValueKey: 'value',
  itemLabelKey: 'label',
  direction: DIRECTION_TYPE.Horizontal,
  required: false,
  disabled: false,
  errorMessages: [],
}
