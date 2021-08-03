import React from 'react'
import { Story, Meta } from '@storybook/react'
import TwitterMomentShare, {
  TwitterMomentShareProps
} from './../components/TwitterMomentShare'
import { action } from '@storybook/addon-actions'
import './story.css'

export default {
  title: 'Twitter Moment Share',
  component: TwitterMomentShare,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as Meta

const Template: Story<TwitterMomentShareProps> = (args) => (
  <div className='centerContent'>
    <div className='selfCenter spaceBetween'>
      <TwitterMomentShare {...args} />
    </div>
  </div>
)

export const MomentShare = Template.bind({})
MomentShare.args = {
  momentId: '650667182356082688'
}

export const MomentShareWithTextPlaceholder = Template.bind({})
MomentShareWithTextPlaceholder.args = {
  momentId: '650667182356082688',
  placeholder: 'Loading'
}

export const MomentShareWithCustomPlaceholder = Template.bind({})
MomentShareWithCustomPlaceholder.args = {
  momentId: '650667182356082688',
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

export const MomentShareWithOnLoad = Template.bind({})
MomentShareWithOnLoad.args = {
  momentId: '650667182356082688',
  onLoad: action('Loaded successfully')
}
