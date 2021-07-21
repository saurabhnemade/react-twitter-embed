import React from 'react';
import { Story, Meta } from '@storybook/react';
import TwitterOnAirButton , {TwitterOnAirButtonProps} from "./../components/TwitterOnAirButton";
import {action} from "@storybook/addon-actions";
import './story.css'


export default {
  title: 'Twitter On Air Button',
  component: TwitterOnAirButton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<TwitterOnAirButtonProps> = (args) =>
  <div className='centerContent'>
    <div className='selfCenter spaceBetween'>
      <TwitterOnAirButton {...args} />
    </div>
  </div>;

export const OnAirButton = Template.bind({});
OnAirButton.args = {
  username: 'KatmaiNPS'
};

export const OnAirButtonLarge = Template.bind({});
OnAirButtonLarge.args = {
  username: 'KatmaiNPS',
  options: { size: 'large' }
};

export const OnAirButtonWithTextPlaceholder = Template.bind({});
OnAirButtonWithTextPlaceholder.args = {
  username: 'KatmaiNPS',
  placeholder: 'Loading'
};

export const OnAirButtonWithCustomPlaceholder = Template.bind({});
OnAirButtonWithCustomPlaceholder.args = {
  username: 'KatmaiNPS',
  placeholder: (
    <div style={{padding: 10, margin: 10, backgroundColor: 'red', color: 'white'}}>
      Hello I am custom placeholder
    </div>
  )
};

export const OnAirButtonWithOnLoad = Template.bind({});
OnAirButtonWithOnLoad.args = {
  username: 'KatmaiNPS',
  options: { size: 'large' },
  onLoad: action('Loaded successfully')
};
