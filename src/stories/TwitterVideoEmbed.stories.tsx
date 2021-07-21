import React from 'react';
import { Story, Meta } from '@storybook/react';
import TwitterVideoEmbed , {TwitterVideoEmbedProps} from "./../components/TwitterVideoEmbed";
import {action} from "@storybook/addon-actions";
import './story.css'


export default {
  title: 'Twitter Video Embed',
  component: TwitterVideoEmbed,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<TwitterVideoEmbedProps> = (args) =>
  <div className='centerContent'>
    <div className='selfCenter spaceBetween'>
      <TwitterVideoEmbed {...args} />
    </div>
  </div>;

export const TwitterVideoEmbedSimple = Template.bind({});
TwitterVideoEmbedSimple.args = {
  id: '560070183650213889'
};

export const TwitterVideoEmbedWithTextPlaceholder = Template.bind({});
TwitterVideoEmbedWithTextPlaceholder.args = {
  id: '560070183650213889',
  placeholder: 'Loading'
}

export const TwitterVideoEmbedWithCustomPlaceholder = Template.bind({});
TwitterVideoEmbedWithTextPlaceholder.args = {
  id: '560070183650213889',
  placeholder: (
    <div style={{padding: 10, margin: 10, backgroundColor: 'red', color: 'white'}}>
      Hello I am custom placeholder
    </div>
  )
}

export const TwitterVideoEmbedWithOnloadFunction = Template.bind({});
TwitterVideoEmbedWithOnloadFunction.args = {
  id: '560070183650213889',
  onLoad: action('Loaded successfully')
}
