import React, { ChangeEvent, useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { InputCheckGroup, InputCheckGroupProp } from './InputCheckGroup'
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

const createProps = function <Item extends Record<string, any>>(
  props: InputCheckGroupProp<Item>
) {
  return props
}

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Input/CheckGroup',
  component: InputCheckGroup,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  args: createProps({
    value: ['train', 'car'] as (number | string)[],
    items: ITEMS,
    itemLabelKey: 'label',
    itemValueKey: 'key',
    onChange: action('onSelectValue'),
  }),
} as ComponentMeta<typeof InputCheckGroup>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof InputCheckGroup> = (args) => {
  const [values, setValues] = useState<(number | string)[]>([...args.value])
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (values.includes(e.target.value)) {
      setValues(values.filter((value) => value !== e.target.value))
    } else {
      const copyValues = [...values]
      copyValues.push(e.target.value)
      setValues(copyValues)
    }
  }
  return <InputCheckGroup {...args} value={values} onChange={onChange} />
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
