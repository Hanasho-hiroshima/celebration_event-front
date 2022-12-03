import { FC } from 'react'
import { DirectionType, DIRECTION_TYPE } from '@packs/constants/other'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'

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

export const InputRadioGroup: FC<InputRadioGroupProp> = (props) => {
  return (
    <RadioGroup
      row={props.direction === DIRECTION_TYPE.Horizontal}
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
