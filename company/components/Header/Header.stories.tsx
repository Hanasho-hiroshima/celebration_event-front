import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Header } from './Header'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Input/InputText',
  component: Header,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  args: {},
} as ComponentMeta<typeof Header>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

const Template: ComponentStory<typeof Header> = () => {
  return <Header />
}

export const Base = Template.bind({})
