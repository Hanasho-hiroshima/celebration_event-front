import { useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { InputAutocomplete } from './InputAutocomplete'
import { action } from '@storybook/addon-actions'

type SampleItem = {
  key: string
  label: string
  disabled?: boolean
}

type InputAutocompleteType = typeof InputAutocomplete<SampleItem>

const ITEMS: SampleItem[] = [
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

const DISABLED_ITEMS: SampleItem[] = [
  {
    key: 'train',
    label: '電車',
  },
  {
    key: 'bus',
    label: 'バス',
    disabled: true,
  },
  {
    key: 'car',
    label: '車',
  },
  {
    key: 'bicycle',
    label: '自転車',
    disabled: true,
  },
  {
    key: 'walk',
    label: '徒歩',
  },
]

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Input/Autocomplete',
  component: InputAutocomplete,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  args: {
    value: [],
    items: ITEMS,
    itemLabelKey: 'label',
    itemValueKey: 'key',
    multiple: true,
    onChange: action('onSetItem'),
  },
} as ComponentMeta<InputAutocompleteType>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<InputAutocompleteType> = (args) => {
  const [values, setValues] = useState(args.value)
  const onChange = (e: any) => {
    setValues(e)
  }
  return <InputAutocomplete {...args} value={values} onChange={onChange} />
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

export const Single = Template.bind({})
Single.args = {
  value: { key: 'car', label: '車' },
  multiple: false,
}

export const ItemHasDisabled = Template.bind({})
ItemHasDisabled.args = {
  items: DISABLED_ITEMS,
}

export const Medium = Template.bind({})
Medium.args = {
  size: 'medium',
}

export const FixedChip = Template.bind({})
FixedChip.args = {
  fixedSelectedItem: [ITEMS[0]],
}

export const Loading = Template.bind({})
Loading.args = {
  loading: true,
}
