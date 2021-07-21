import React from 'react';
import { Story, Meta } from '@storybook/react';
import TwitterTweetEmbed , {TwitterTweetEmbedProps} from "./../components/TwitterTweetEmbed";
import {action} from "@storybook/addon-actions";
import './story.css'


export default {
  title: 'Twitter Tweet Embed',
  component: TwitterTweetEmbed,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<TwitterTweetEmbedProps> = (args) =>
  <div className='centerContent'>
    <div className='selfCenter spaceBetween'>
      <TwitterTweetEmbed {...args} />
    </div>
  </div>;

export const TweetEmbed = Template.bind({});
TweetEmbed.args = {
  tweetId: '933354946111705097'
};

export const TweetEmbedMedia = Template.bind({});
TweetEmbedMedia.args = {
  tweetId: '1083592734038929408'
}

export const TweetWithMediaEmbedWithTextPlaceholder = Template.bind({});
TweetWithMediaEmbedWithTextPlaceholder.args = {
  tweetId: '1083592734038929408',
  placeholder: 'Loading'
}

export const TweetWithMediaEmbedWithCustomPlaceholder = Template.bind({});
TweetWithMediaEmbedWithCustomPlaceholder.args = {
  tweetId: '1083592734038929408',
  placeholder: (
    <div style={{padding: 10, margin: 10, backgroundColor: 'red', color: 'white'}}>
      Hello I am custom placeholder
    </div>
  )
}

export const TweetWithMediaEmbedWithOnloadFunction = Template.bind({});
TweetWithMediaEmbedWithOnloadFunction.args = {
  tweetId: '1083592734038929408',
  options: { cards: 'hidden', width: 300, maxWidth: 800 },
  onLoad: action('Loaded successfully')
}

export const TweetWithMediaEmbedHideMedia = Template.bind({});
TweetWithMediaEmbedHideMedia.args = {
  tweetId: '1083592734038929408',
  options: { cards: 'hidden', width: 300, maxWidth: 800 },
  onLoad: (tweetWidgetEl: HTMLDivElement) => {
    if (tweetWidgetEl.shadowRoot) {
      const tweetEl: HTMLDivElement | null = tweetWidgetEl.shadowRoot.querySelector('.EmbeddedTweet')
      if (tweetEl) {
        tweetEl.style.width = '800px'
        tweetEl.style.maxWidth = '800px'
      }
    }
  }
}

// export const TweetWithCustomCss = Template.bind({});
// TweetWithMediaEmbedHideMedia.args = {
//   tweetId: '1083592734038929408',
//   onLoad: (tweetWidgetEl: HTMLDivElement) => {
//     if (tweetWidgetEl.shadowRoot) {
//       const tweetEl: HTMLDivElement | null = tweetWidgetEl.shadowRoot.querySelector('.EmbeddedTweet')
//       if (tweetEl) {
//         tweetEl.style.border = '5px solid red'
//       }
//     }
//   }
// }
