import React, { useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { InputSelect, InputSelectProp } from './InputSelect'
import { SelectChangeEvent } from '@mui/material'

const ITEMS = [
  {
    key: 'train',
    label: '電車',
  },
  {
    key: 'bus',
    label: 'バス',
  },
  {
    key: 'car',
    label: '車',
  },
  {
    key: 'bicycle',
    label: '自転車',
  },
  {
    key: 'walk',
    label: '徒歩',
  },
]

const createProps = function <Item extends Record<string, any>>(
  props: InputSelectProp<Item>
) {
  return props
}

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Input/Select',
  component: InputSelect,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  args: createProps({
    value: 'car',
    items: ITEMS,
    itemLabelKey: 'label',
    itemValueKey: 'key',
    onChange: action('onSelectItem'),
  }),
} as ComponentMeta<typeof InputSelect>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof InputSelect> = (args) => {
  const [values, setValues] = useState<number | string>(args.value)
  const onChange = (e: SelectChangeEvent): void => {
    setValues(e.target.value)
  }

  return <InputSelect {...args} value={values} onChange={onChange} />
}

export const Base = Template.bind({})

export const Disabled = Template.bind({})
Disabled.args = {
  disabled: true,
}

export const Readonly = Template.bind({})
Readonly.args = {
  readonly: true,
}

export const Small = Template.bind({})
Small.args = {
  size: 'medium',
}
