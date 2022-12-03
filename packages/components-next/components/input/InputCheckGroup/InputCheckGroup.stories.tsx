import React, { useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { InputCheckGroup } from './InputCheckGroup'
import { DIRECTION_TYPE } from '@packs/constants/other'

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

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Input/CheckGroup',
  component: InputCheckGroup,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  args: {
    items: ITEMS,
    itemLabelKey: 'label',
    itemValueKey: 'key',
  },
} as ComponentMeta<typeof InputCheckGroup>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof InputCheckGroup> = (args) => {
  const [values, setValues] = useState<(number | string)[]>(['train', 'car'])
  const onChange = (changeValue: number | string) => {
    if (values.includes(changeValue)) {
      setValues(values.filter((value) => value !== changeValue))
    } else {
      const copyValues = [...values]
      copyValues.push(changeValue)
      setValues(copyValues)
    }
  }
  return <InputCheckGroup {...args} value={values} onHandleChange={onChange} />
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

export const Vertical = Template.bind({})
Vertical.args = {
  direction: DIRECTION_TYPE.Vertical,
}

export const Small = Template.bind({})
Small.args = {
  size: 'small',
}
