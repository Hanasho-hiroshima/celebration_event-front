import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { InputRadioGroup } from './InputRadioGroup'

const BOOLEAN_ITEMS = [
  {
    value: true,
    label: 'はい',
  },
  {
    value: false,
    label: 'いいえ',
  },
]

const STRING_ITEMS = [
  {
    value: 'entry',
    label: '応募',
  },
  {
    value: 'accept',
    label: '合格',
  },
  {
    value: 'join',
    label: '参加',
  },
]

const NUMBER_ITEMS_WITH_DISABLED = [
  {
    value: 0,
    label: '受注',
  },
  {
    value: 1,
    label: '商品の用意',
  },
  {
    value: 2,
    label: 'タバコ',
    disabled: true,
  },
  {
    value: 3,
    label: '出荷',
  },
]

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Input/RadioGroup',
  component: InputRadioGroup,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  args: {
    items: BOOLEAN_ITEMS,
    itemValueKey: 'value',
    itemLabelKey: 'label',
  },
} as ComponentMeta<typeof InputRadioGroup>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof InputRadioGroup> = (args) => (
  <InputRadioGroup {...args} />
)

export const Boolean = Template.bind({})

export const String = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
String.args = {
  items: STRING_ITEMS,
}

export const Number = Template.bind({})
Number.args = {
  items: NUMBER_ITEMS_WITH_DISABLED,
}

export const Disabled = Template.bind({})
Disabled.args = {
  disabled: true,
}
