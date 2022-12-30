import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Tooltip } from './Tooltip'

export default {
  title: 'Other/Tooltip',
  component: Tooltip,
  args: {
    text: 'ツールチップテキスト',
  },
} as ComponentMeta<typeof Tooltip>

const Template: ComponentStory<typeof Tooltip> = (args) => {
  return <Tooltip {...args} />
}

export const Base = Template.bind({})
