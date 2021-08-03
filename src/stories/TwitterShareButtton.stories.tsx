import React from 'react'
import { Story, Meta } from '@storybook/react'
import TwitterShareButton, {
  TwitterShareButtonProps
} from './../components/TwitterShareButton'
import { action } from '@storybook/addon-actions'
import './story.css'

export default {
  title: 'Twitter Share Button',
  component: TwitterShareButton,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as Meta

const Template: Story<TwitterShareButtonProps> = (args) => (
  <div className='centerContent'>
    <div className='selfCenter spaceBetween'>
      <TwitterShareButton {...args} />
    </div>
  </div>
)

export const ShareButton = Template.bind({})
ShareButton.args = {
  url: 'https://facebook.com/saurabhnemade',
  options: { text: '#reactjs is awesome', via: 'saurabhnemade' }
}

export const ShareButtonLarge = Template.bind({})
ShareButtonLarge.args = {
  url: 'https://facebook.com/saurabhnemade',
  options: {
    text: '#reactjs is awesome',
    via: 'saurabhnemade',
    size: 'large'
  }
}

export const ShareButtonWithTextPlaceholder = Template.bind({})
ShareButtonWithTextPlaceholder.args = {
  url: 'https://facebook.com/saurabhnemade',
  options: {
    text: '#reactjs is awesome',
    via: 'saurabhnemade',
    size: 'large'
  },
  placeholder: 'Loading'
}

export const ShareButtonWithCustomPlaceholder = Template.bind({})
ShareButtonWithCustomPlaceholder.args = {
  url: 'https://facebook.com/saurabhnemade',
  options: {
    text: '#reactjs is awesome',
    via: 'saurabhnemade',
    size: 'large'
  },
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

export const ShareButtonWithOnLoad = Template.bind({})
ShareButtonWithOnLoad.args = {
  url: 'https://facebook.com/saurabhnemade',
  options: {
    text: '#reactjs is awesome',
    via: 'saurabhnemade',
    size: 'large'
  },
  onLoad: action('Loaded successfully')
}
