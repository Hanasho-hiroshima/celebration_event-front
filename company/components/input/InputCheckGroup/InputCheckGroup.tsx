import React, { FC } from 'react'
import { DIRECTION_TYPE } from '@shared/constants/other'
import { InputCheckGroupProp } from './InputCheckGroupType'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'

export const InputCheckGroup: FC<InputCheckGroupProp> = (props) => {
  const items = props.items || []
  const itemValueKey = props.itemValueKey || 'value'
  const itemLabelKey = props.itemLabelKey || 'label'
  const required = props.required || false
  const disabled = props.disabled || false
  const readonly = props.readonly || false
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
