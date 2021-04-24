import React from 'react';
import { Story, Meta } from '@storybook/react';
import TwitterHashtagButton, {TwitterHashtagButtonProps} from "./../components/TwitterHashtagButton";
import {action} from "@storybook/addon-actions";
import './story.css'


export default {
  title: 'Twitter Hashtag Button',
  component: TwitterHashtagButton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<TwitterHashtagButtonProps> = (args) =>
  <div className='centerContent'>
    <div className='selfCenter spaceBetween'>
      <TwitterHashtagButton {...args} />
    </div>
  </div>;

export const HashtagButton = Template.bind({});
HashtagButton.args = {
  tag: 'cybersecurity'
};

export const HashtagButtonLarge = Template.bind({});
HashtagButtonLarge.args = {
  tag: 'cybersecurity',
  options: { size: 'large' }
};

export const HashtagButtonWithTextPlaceholder = Template.bind({});
HashtagButtonWithTextPlaceholder.args = {
  tag: 'cybersecurity',
  options: { size: 'large' },
  placeholder: 'Loading'
};

export const HashtagButtonWithCustomPlaceholder = Template.bind({});
HashtagButtonWithCustomPlaceholder.args = {
  tag: 'cybersecurity',
  options: { size: 'large' },
  placeholder: (
    <div style={{padding: 10, margin: 10, backgroundColor: 'red', color: 'white'}}>
      Hello I am custom placeholder
    </div>
  )
};

export const HashtagButtonWithOnLoad = Template.bind({});
HashtagButtonWithOnLoad.args = {
  tag: 'cybersecurity',
  options: { size: 'large' },
  onLoad: action('Loaded successfully')
};
