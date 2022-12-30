import { ComponentStory, ComponentMeta } from '@storybook/react'
import { RequiredLabel } from './RequiredLabel'

export default {
  title: 'Form/RequiredLabel',
  component: RequiredLabel,
  args: {
    required: true,
  },
} as ComponentMeta<typeof RequiredLabel>

const Template: ComponentStory<typeof RequiredLabel> = (args) => {
  return <RequiredLabel {...args} />
}

export const Required = Template.bind({})

export const Optional = Template.bind({})
Optional.args = {
  required: false,
}
