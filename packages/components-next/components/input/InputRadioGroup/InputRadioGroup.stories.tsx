import React, { useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { InputRadioGroup, InputRadioGroupValue } from './InputRadioGroup'

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

const Template: ComponentStory<typeof InputRadioGroup> = (args) => {
  const [boolValue, setBoolValue] = useState<InputRadioGroupValue>(true)

  const onChange = (changeValue: InputRadioGroupValue) => {
    setBoolValue(changeValue)
  }
  return (
    <InputRadioGroup {...args} value={boolValue} onHandleChange={onChange} />
  )
}

const StringTemplate: ComponentStory<typeof InputRadioGroup> = (args) => {
  const [stringValue, setStringValue] = useState<InputRadioGroupValue>('entry')

  const onChange = (changeValue: InputRadioGroupValue) => {
    setStringValue(changeValue)
  }
  return (
    <InputRadioGroup {...args} value={stringValue} onHandleChange={onChange} />
  )
}

const NumberTemplate: ComponentStory<typeof InputRadioGroup> = (args) => {
  const [numberValue, setNumberValue] = useState<InputRadioGroupValue>(1)

  const onChange = (changeValue: InputRadioGroupValue) => {
    setNumberValue(changeValue)
  }
  return (
    <InputRadioGroup {...args} value={numberValue} onHandleChange={onChange} />
  )
}

export const Boolean = Template.bind({})

export const String = StringTemplate.bind({})
String.args = {
  items: STRING_ITEMS,
}

export const Number = NumberTemplate.bind({})
Number.args = {
  value: 1,
  items: NUMBER_ITEMS_WITH_DISABLED,
}

export const Disabled = Template.bind({})
Disabled.args = {
  disabled: true,
}

export const Readonly = Template.bind({})
Readonly.args = {
  readonly: true,
}
