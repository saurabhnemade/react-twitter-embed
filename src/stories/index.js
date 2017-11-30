import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { withInfo } from '@storybook/addon-info';
import Button from '../index';
import TwitterTimelineEmbed from '../components/TwitterTimelineEmbed';
import TwitterShareButton from '../components/TwitterShareButton';

storiesOf('Button', module)
  .add('default view', () => (
    <Button onClick={action('button clicked')}>Hello</Button>
  ))
  .add('some emojies as the text', () => (
    <Button>😀 😎 👍 💯</Button>
  ))
  .add('custom styles', () => {
    const style = {
      fontSize: 20,
      textTransform: 'uppercase',
      color: '#FF8833',
    };
    return (
      <Button style={style}>Hello</Button>
    );
  });


storiesOf('Twitter Timeline Embed', module)
  .add('Timeline Profile (With Screen Name)', withInfo({
    text: 'Watch twitter user timeline with given username',
  })(() => (
    <div style={{ width: 250, height: 600 }}>
      <TwitterTimelineEmbed
        sourceType={'profile'}
        screenName={'saurabhnemade'}
        options={{ height: 400 }}
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
      This is under development
      <TwitterTimelineEmbed
        sourceType={'collection'}
        id={588824628950269952}
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
      This is under development
      <TwitterTimelineEmbed
        sourceType={'widget'}
        widgetId={936304851348111360}
        options={{ height: 400 }}
      />
    </div>
  )));

storiesOf('Twitter Share button', module)
  .add('Share button', withInfo({
    text: 'Timeline widget example with a valid given widget id',
  })(() => (
    <div style={{ margin: 100 }}>
      <TwitterShareButton
        url={'https://facebook.com/saurabhnemade'}
        options={{ text: '#reactjs is awesome', via: 'saurabhnemade' }}
      />
    </div>
  )));
