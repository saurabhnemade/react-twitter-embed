
# React Twitter Embed Component

[![NPM](https://img.shields.io/npm/v/react-twitter-embed.svg)](https://www.npmjs.com/package/react-twitter-embed) [![Storybook](https://cdn.jsdelivr.net/gh/storybooks/brand@master/badge/badge-storybook.svg)](https://saurabhnemade.github.io/react-twitter-embed/) [![Build Status](https://travis-ci.org/saurabhnemade/react-twitter-embed.svg?branch=storybook-migration)](https://travis-ci.org/saurabhnemade/react-twitter-embed) [![Known Vulnerabilities](https://snyk.io/test/github/saurabhnemade/react-twitter-embed/badge.svg)](https://snyk.io/test/github/saurabhnemade/react-twitter-embed) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) [![License](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://raw.githubusercontent.com/saurabhnemade/react-twitter-embed/master/LICENSE)


React Twitter Embed Component

Simplest way to add Twitter Widgets to your react project.

## Demo and Examples
https://saurabhnemade.github.io/react-twitter-embed/


## Install

```bash
npm install --save react-twitter-embed
```

## Usage

```jsx
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';
```

**Adding Timeline:**

     <TwitterTimelineEmbed
      sourceType="profile"
      screenName="saurabhnemade"
      options={{height: 400}}
    />

**Adding Tweet:**

    <TwitterTweetEmbed
      tweetId={'933354946111705097'}
    />

**Adding Share Button:**

      <TwitterShareButton
        url={'https://facebook.com/saurabhnemade'}
        options={{ text: '#reactjs is awesome', via: 'saurabhnemade' }}
      />

**Adding Mention Button:**

      <TwitterMentionButton
        screenName={'saurabhnemade'}
      />

**Adding Hashtag button:**

      <TwitterHashtagButton
        tag={'cybersecurity'}
      />

**Adding follow button:**

      <TwitterFollowButton
        screenName={'saurabhnemade'}
      />

**Adding Moment:**

      <TwitterMomentShare
        momentId={'650667182356082688'}
      />

**Adding Direct Messaging Button:**

      <TwitterDMButton
        id={1364031673}
      />

**Adding Twitter Video:**

      <TwitterVideoEmbed
        id={'560070183650213889'}
      />

**Adding Twitter On Air Button:**

      <TwitterOnAirButton
        id={'560070183650213889'}
      />

**Explore All Options by Twitter Widgets API:**

      https://developer.twitter.com/en/docs/twitter-for-websites/javascript-api/overview


## License

MIT © [saurabhnemade](https://github.com/saurabhnemade)

Copyright (c) 2022

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

