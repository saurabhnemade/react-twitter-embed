import React from 'react'
import { Story, Meta } from '@storybook/react'
import TwitterMentionButton, {
  TwitterMentionButtonProps
} from './../components/TwitterMentionButton'
import { action } from '@storybook/addon-actions'
import './story.css'

export default {
  title: 'Twitter Mention Button',
  component: TwitterMentionButton,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as Meta

const Template: Story<TwitterMentionButtonProps> = (args) => (
  <div className='centerContent'>
    <div className='selfCenter spaceBetween'>
      <TwitterMentionButton {...args} />
    </div>
  </div>
)

export const MentionButton = Template.bind({})
MentionButton.args = {
  screenName: 'saurabhnemade'
}

export const MentionButtonLarge = Template.bind({})
MentionButtonLarge.args = {
  screenName: 'saurabhnemade',
  options: { size: 'large' }
}

export const MentionButtonWithTextPlaceholder = Template.bind({})
MentionButtonWithTextPlaceholder.args = {
  screenName: 'saurabhnemade',
  options: { size: 'large' },
  placeholder: 'Loading'
}

export const MentionButtonWithCustomPlaceholder = Template.bind({})
MentionButtonWithCustomPlaceholder.args = {
  screenName: 'saurabhnemade',
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

export const MentionButtonWithOnLoad = Template.bind({})
MentionButtonWithOnLoad.args = {
  screenName: 'saurabhnemade',
  options: { size: 'large' },
  onLoad: action('Loaded successfully')
}
