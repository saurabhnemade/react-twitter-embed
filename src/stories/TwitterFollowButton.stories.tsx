import React from 'react';
import { Story, Meta } from '@storybook/react';
import TwitterFollowButton, {TwitterFollowButtonProps} from "./../components/TwitterFollowButton";
import {action} from "@storybook/addon-actions";
import './story.css'


export default {
  title: 'Twitter Follow Button',
  component: TwitterFollowButton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<TwitterFollowButtonProps> = (args) =>
  <div className='centerContent'>
    <div className='selfCenter spaceBetween'>
      <TwitterFollowButton {...args} />
    </div>
  </div>;

export const FollowButtonSimple = Template.bind({});
FollowButtonSimple.args = {
  screenName: 'saurabhnemade'
};

export const FollowButtonLarge = Template.bind({});
FollowButtonLarge.args = {
  screenName: 'saurabhnemade',
  options: { size: 'large' }
};

export const FollowButtonWithTextPlaceholder = Template.bind({});
FollowButtonWithTextPlaceholder.args = {
  screenName: 'saurabhnemade',
  options: { size: 'large' },
  placeholder: 'Loading'
};

export const FollowButtonWithCustomPlaceholder = Template.bind({});
FollowButtonWithCustomPlaceholder.args = {
  screenName: 'saurabhnemade',
  options: { size: 'large' },
  placeholder: (
    <div style={{padding: 10, margin: 10, backgroundColor: 'red', color: 'white'}}>
      Hello I am custom placeholder
    </div>
  )
};

export const FollowButtonWithOnLoad = Template.bind({});
FollowButtonWithOnLoad.args = {
  screenName: 'saurabhnemade',
  options: { size: 'large' },
  onLoad: action('Loaded successfully')
};
