import React, { useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { CurrencyYen } from '@mui/icons-material'

import { InputText } from './InputText'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Input/InputText',
  component: InputText,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  args: {
    id: 'text-story',
    type: 'text',
    placeholder: 'プレースホルダー',
  },
} as ComponentMeta<typeof InputText>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

const Template: ComponentStory<typeof InputText> = (args) => {
  const [text, setText] = useState<string>('')
  const onChangeText = (value: string) => {
    setText(value)
  }
  return <InputText {...args} value={text} onInputValue={onChangeText} />
}

export const Base = Template.bind({})

export const Counter = Template.bind({})
Counter.args = {
  maxLength: 60,
}

export const Textarea = Template.bind({})
Textarea.args = {
  multiline: true,
  rows: 6,
}

export const Medium = Template.bind({})
Medium.args = {
  size: 'medium',
}

export const Password = Template.bind({})
Password.args = {
  type: 'password',
}

export const AppendPrependNode = Template.bind({})
AppendPrependNode.args = {
  prependNode: <CurrencyYen />,
  appendNode: <div>円</div>,
}

export const Error = Template.bind({})
Error.args = {
  error: true,
  errorMessage: 'エラーです',
}
