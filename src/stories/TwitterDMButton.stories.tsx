import React from 'react'
import { Story, Meta } from '@storybook/react'
import TwitterDMButton, {
  TwitterDMButtonProps
} from './../components/TwitterDMButton'
import { action } from '@storybook/addon-actions'
import './story.css'

export default {
  title: 'Twitter DM Button',
  component: TwitterDMButton,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as Meta

const Template: Story<TwitterDMButtonProps> = (args) => (
  <div className='centerContent'>
    <div className='selfCenter spaceBetween'>
      <TwitterDMButton {...args} />
    </div>
  </div>
)

export const DirectMessageButton = Template.bind({})
DirectMessageButton.args = {
  id: 1364031673
}

export const DirectMessageButtonLarge = Template.bind({})
DirectMessageButtonLarge.args = {
  id: 1364031673,
  options: { size: 'large' }
}

export const DirectMessageButtonWithTextPlaceholder = Template.bind({})
DirectMessageButtonWithTextPlaceholder.args = {
  id: 1364031673,
  options: { size: 'large' },
  placeholder: 'Loading'
}

export const DirectMessageButtonWithCustomPlaceholder = Template.bind({})
DirectMessageButtonWithCustomPlaceholder.args = {
  id: 1364031673,
  options: { size: 'large' },
  placeholder: (
    <div
      style={{
        padding: 10,
        margin: 10,
        backgroundColor: 'red',
        color: 'white'
      }}
    >
      Hello I am custom placeholder
    </div>
  )
}

export const DirectMessageButtonWithOnLoadAction = Template.bind({})
DirectMessageButtonWithOnLoadAction.args = {
  id: 1364031673,
  options: { size: 'large' },
  placeholder: (
    <div
      style={{
        padding: 10,
        margin: 10,
        backgroundColor: 'red',
        color: 'white'
      }}
    >
      Hello I am custom placeholder
    </div>
  ),
  onLoad: action('Loaded successfully')
}
