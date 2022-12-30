import { ComponentStory, ComponentMeta } from '@storybook/react'
import { InputTitle } from './InputTitle'

export default {
  title: 'Form/InputTitle',
  component: InputTitle,
  args: {
    title: 'タイトル',
  },
} as ComponentMeta<typeof InputTitle>

const Template: ComponentStory<typeof InputTitle> = (args) => {
  return <InputTitle {...args} />
}

export const Base = Template.bind({})
Base.args = {
  required: true,
}

export const Optional = Template.bind({})
Optional.args = {
  title: '任意タイトル',
  required: false,
}

export const Tooltip = Template.bind({})
Tooltip.args = {
  title: 'ツールチップ',
  required: false,
  tooltipText: 'ツールチップだにょーん',
}

export const Asterisk = Template.bind({})
Asterisk.args = {
  title: 'アスタリスクパターン',
  required: true,
  requiredDisplayType: 'aster',
}

export const NoLabel = Template.bind({})
NoLabel.args = {
  title: '必須・任意ないパターン',
}
