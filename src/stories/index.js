import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { withInfo } from '@storybook/addon-info';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from '../index';

storiesOf('Twitter Timeline Embed', module)
  .add('Timeline Profile (With Screen Name)', withInfo({
    text: 'Watch twitter user timeline with given username',
  })(() => (
    <div style={{ width: 250, height: 600 }}>
      <TwitterTimelineEmbed
        sourceType={'profile'}
        screenName={'saurabhnemade'}
        options={{ height: 400 }}
        onComplete={action('sample action')}
      />
    </div>
  )))
  .add('Timeline Profile (With userId)', withInfo({
    text: 'Timeline with given userId',
  })(() => (
    <div style={{ width: 250, height: 600 }}>
      <TwitterTimelineEmbed
        sourceType={'profile'}
        userId={1934309676}
        options={{ height: 400 }}
      />
    </div>
  )))
  .add('Timeline Likes (With screenName)', withInfo({
    text: 'Timeline Likes example with given username',
  })(() => (
    <div style={{ width: 250, height: 600 }}>
      <TwitterTimelineEmbed
        sourceType={'likes'}
        screenName={'saurabhnemade'}
        options={{ height: 400 }}
      />
    </div>
  )))
  .add('Timeline Likes (With userId)', withInfo({
    text: 'Timeline Likes example with given user id',
  })(() => (
    <div style={{ width: 250, height: 600 }}>
      <TwitterTimelineEmbed
        sourceType={'likes'}
        userId={1934309676}
        options={{ height: 400 }}
      />
    </div>
  )))
  .add('Timeline List (With screenName and slug)', withInfo({
    text: 'Timeline Likes example with given screename and slug',
  })(() => (
    <div style={{ width: 250, height: 600 }}>
      <TwitterTimelineEmbed
        sourceType={'list'}
        ownerScreenName={'palafo'}
        slug={'breakingnews'}
        options={{ height: 400 }}
      />
    </div>
  )))
  .add('Timeline List (With list id)', withInfo({
    text: 'Timeline List example with given list id',
  })(() => (
    <div style={{ width: 250, height: 600 }}>
      <TwitterTimelineEmbed
        sourceType={'list'}
        id={8044403}
        options={{ height: 400 }}
      />
    </div>
  )))
  .add('Timeline collection', withInfo({
    text: 'Timeline collection example with given collection id',
  })(() => (
    <div style={{ width: 250, height: 600 }}>
      <TwitterTimelineEmbed
        sourceType={'collection'}
        id={'588824628950269952'}
        options={{ height: 400 }}
      />
    </div>
  )))
  .add('Timeline url (with collection url)', withInfo({
    text: 'Timeline url example with given collection url',
  })(() => (
    <div style={{ width: 250, height: 600 }}>
      <TwitterTimelineEmbed
        sourceType={'url'}
        url={'https://twitter.com/NYTNow/timelines/576828964162965504'}
        options={{ height: 400 }}
      />
    </div>
  )))
  .add('Timeline url (with profile url)', withInfo({
    text: 'Timeline url example with given profile url',
  })(() => (
    <div style={{ width: 250, height: 600 }}>
      <TwitterTimelineEmbed
        sourceType={'url'}
        url={'https://twitter.com/rahul581'}
        options={{ height: 400 }}
      />
    </div>
  )))
  .add('Timeline url (with list url)', withInfo({
    text: 'Timeline url example with given list url',
  })(() => (
    <div style={{ width: 250, height: 600 }}>
      <TwitterTimelineEmbed
        sourceType={'url'}
        url={'https://twitter.com/mashable/lists/social-media'}
        options={{ height: 400 }}
      />
    </div>
  )))
  .add('Timeline url (with likes url)', withInfo({
    text: 'Timeline url example with given likes url',
  })(() => (
    <div style={{ width: 250, height: 600 }}>
      <TwitterTimelineEmbed
        sourceType={'url'}
        url={'https://twitter.com/ladygaga/likes'}
        options={{ height: 400 }}
      />
    </div>
  )))
  .add('Timeline widget', withInfo({
    text: 'Timeline widget example with a valid given widget id',
  })(() => (
    <div style={{ width: 250, height: 600 }}>
      <TwitterTimelineEmbed
        sourceType={'widget'}
        widgetId={'936304851348111360'}
        options={{ height: 400 }}
      />
    </div>
  )))
  .add('Timeline Autoheight', withInfo({
    text: 'Timeline autoheight example',
  })(() => (
    <div style={{ display: 'flex' }}>
      <div style={{ width: 250, height: 200, margin: 20 }}>
        <TwitterTimelineEmbed
          sourceType={'widget'}
          widgetId={'936304851348111360'}
          autoHeight
        />
      </div>
      <div style={{ width: 250, height: 300, margin: 20 }}>
        <TwitterTimelineEmbed
          sourceType={'widget'}
          widgetId={'936304851348111360'}
          autoHeight
        />
      </div>
      <div style={{ width: 250, height: 250, margin: 20 }}>
        <TwitterTimelineEmbed
          sourceType={'widget'}
          widgetId={'936304851348111360'}
          autoHeight
        />
      </div>
    </div>
  )));

storiesOf('Twitter Share button', module)
  .add('Share button', withInfo({
    text: 'Twitter share button example',
  })(() => (
    <div style={{ margin: 100 }}>
      <TwitterShareButton
        url={'https://facebook.com/saurabhnemade'}
        options={{ text: '#reactjs is awesome', via: 'saurabhnemade' }}
      />
      <TwitterShareButton
        url={'https://facebook.com/saurabhnemade'}
        options={{ text: '#reactjs is awesome', via: 'saurabhnemade', size: 'large' }}
      />
    </div>
  )));

storiesOf('Twitter Follow button', module)
  .add('Follow button', withInfo({
    text: 'Twitter follow button example',
  })(() => (
    <div style={{ margin: 100 }}>
      <TwitterFollowButton
        screenName={'saurabhnemade'}
      />
      <TwitterFollowButton
        screenName={'saurabhnemade'}
        options={{ size: 'large' }}
      />
    </div>
  )));

storiesOf('Twitter Hashtag button', module)
  .add('Hashtag button', withInfo({
    text: 'Twitter hashtag button example',
  })(() => (
    <div style={{ margin: 100 }}>
      <TwitterHashtagButton
        tag={'cybersecurity'}
      />
      <TwitterHashtagButton
        tag={'cybersecurity'}
        options={{ size: 'large' }}
      />
    </div>
  )));

storiesOf('Twitter Mention button', module)
  .add('Mention button', withInfo({
    text: 'Twitter Mention button example',
  })(() => (
    <div style={{ margin: 100 }}>
      <TwitterMentionButton
        screenName={'saurabhnemade'}
      />
      <TwitterMentionButton
        screenName={'saurabhnemade'}
        options={{ size: 'large' }}
      />
    </div>
  )));

storiesOf('Twitter Tweet Embed', module)
  .add('Tweet embed', withInfo({
    text: 'Tweet embed',
  })(() => (
    <div style={{ width: 400, height: 400 }}>
      <TwitterTweetEmbed
        tweetId={'933354946111705097'}
      />
    </div>
  )));

storiesOf('Twitter Moment Share', module)
  .add('Moment Share', withInfo({
    text: 'Share Life Moment',
  })(() => (
    <div style={{ width: 400, height: 400 }}>
      <TwitterMomentShare momentId="650667182356082688" />
    </div>
  )));

storiesOf('Twitter DM Button', module)
.add('Direct Message Button', withInfo({
  text: 'Add a message button with user id',
})(() => (
  <div style={{ margin: 100 }}>
    <div style={{ margin: 20 }}>
      <TwitterDMButton id={1364031673} />
    </div>
    <div style={{ margin: 20 }}>
      <TwitterDMButton
        id={1364031673}
        options={{ size: 'large' }}
      />
    </div>
  </div>
)));

storiesOf('Twitter Video Embed', module)
.add('Twitter video Embed', withInfo({
  text: 'Add a message button with user id',
})(() => (
  <div style={{ height: 400, width: 400 }}>
    <TwitterVideoEmbed
      id={'560070183650213889'}
    />
  </div>
)));

storiesOf('Twitter Periscope Button', module)
.add('On Air button', withInfo({
  text: 'Add on Air button with username. If user is broadcasting you will see Live in button.',
})(() => (
  <div style={{ margin: 100 }}>
    <div style={{ margin: 20 }}>
      <TwitterOnAirButton username={'KatmaiNPS'} />
    </div>
    <div style={{ margin: 20 }}>
      <TwitterOnAirButton
        username={'KatmaiNPS'}
        options={{ size: 'large' }}
      />
    </div>
  </div>
)));