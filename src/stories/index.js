import React from 'react'

import { storiesOf, addParameters } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { action } from '@storybook/addon-actions'
// import { linkTo } from '@storybook/addon-links'
import { backgrounds } from './backgrounds'
import './story.css'

import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterFollowButton,
  TwitterHashtagButton,
  TwitterMentionButton,
  TwitterTweetEmbed,
  TwitterMomentShare,
  TwitterDMButton,
  TwitterVideoEmbed,
  TwitterOnAirButton
} from '../index'

addParameters({
  backgrounds
})

storiesOf('Twitter Timeline Embed', module)
  .add(
    'Timeline Profile (With Screen Name)',
    withInfo({
      text: 'Watch twitter user timeline with given username'
    })(() => (
      <div className='centerContent'>
        <div className='selfCenter standardWidth'>
          <TwitterTimelineEmbed
            sourceType={'profile'}
            screenName={'saurabhnemade'}
            options={{ height: 400 }}
            onComplete={action('sample action')}
          />
        </div>
      </div>
    ))
  )
  .add(
    'Timeline Profile (With userId)',
    withInfo({
      text: 'Timeline with given userId'
    })(() => (
      <div className='centerContent'>
        <div className='selfCenter standardWidth'>
          <TwitterTimelineEmbed
            sourceType={'profile'}
            userId={1934309676}
            options={{ height: 400 }}
          />
        </div>
      </div>
    ))
  )
  .add(
    'Timeline Likes (With screenName)',
    withInfo({
      text: 'Timeline Likes example with given username'
    })(() => (
      <div className='centerContent'>
        <div className='selfCenter standardWidth'>
          <TwitterTimelineEmbed
            sourceType={'likes'}
            screenName={'saurabhnemade'}
            options={{ height: 400 }}
          />
        </div>
      </div>
    ))
  )
  .add(
    'Timeline Likes (With userId)',
    withInfo({
      text: 'Timeline Likes example with given user id'
    })(() => (
      <div className='centerContent'>
        <div className='selfCenter standardWidth'>
          <TwitterTimelineEmbed
            sourceType={'likes'}
            userId={1934309676}
            options={{ height: 400 }}
          />
        </div>
      </div>
    ))
  )
  .add(
    'Timeline List (With screenName and slug)',
    withInfo({
      text: 'Timeline Likes example with given screename and slug'
    })(() => (
      <div className='centerContent'>
        <div className='selfCenter standardWidth'>
          <TwitterTimelineEmbed
            sourceType={'list'}
            ownerScreenName={'palafo'}
            slug={'breakingnews'}
            options={{ height: 400 }}
          />
        </div>
      </div>
    ))
  )
  .add(
    'Timeline List (With list id)',
    withInfo({
      text: 'Timeline List example with given list id'
    })(() => (
      <div className='centerContent'>
        <div className='selfCenter standardWidth'>
          <TwitterTimelineEmbed
            sourceType={'list'}
            id={8044403}
            options={{ height: 400 }}
          />
        </div>
      </div>
    ))
  )
  .add(
    'Timeline collection',
    withInfo({
      text: 'Timeline collection example with given collection id'
    })(() => (
      <div className='centerContent'>
        <div className='selfCenter standardWidth'>
          <TwitterTimelineEmbed
            sourceType={'collection'}
            id={'576828964162965504'}
            options={{ height: 400 }}
          />
        </div>
      </div>
    ))
  )
  .add(
    'Timeline url (with collection url)',
    withInfo({
      text: 'Timeline url example with given collection url'
    })(() => (
      <div className='centerContent'>
        <div className='selfCenter standardWidth'>
          <TwitterTimelineEmbed
            sourceType={'url'}
            url={'https://twitter.com/NYTNow/timelines/576828964162965504'}
            options={{ height: 400 }}
          />
        </div>
      </div>
    ))
  )
  .add(
    'Timeline url (with profile url)',
    withInfo({
      text: 'Timeline url example with given profile url'
    })(() => (
      <div className='centerContent'>
        <div className='selfCenter standardWidth'>
          <TwitterTimelineEmbed
            sourceType={'url'}
            url={'https://twitter.com/rahul581'}
            options={{ height: 400 }}
          />
        </div>
      </div>
    ))
  )
  .add(
    'Timeline url (with list url)',
    withInfo({
      text: 'Timeline url example with given list url'
    })(() => (
      <div className='centerContent'>
        <div className='selfCenter standardWidth'>
          <TwitterTimelineEmbed
            sourceType={'url'}
            url={'https://twitter.com/mashable/lists/social-media'}
            options={{ height: 400 }}
          />
        </div>
      </div>
    ))
  )
  .add(
    'Timeline url (with likes url)',
    withInfo({
      text: 'Timeline url example with given likes url'
    })(() => (
      <div className='centerContent'>
        <div className='selfCenter standardWidth'>
          <TwitterTimelineEmbed
            sourceType={'url'}
            url={'https://twitter.com/ladygaga/likes'}
            options={{ height: 400 }}
          />
        </div>
      </div>
    ))
  )
  .add(
    'Timeline widget',
    withInfo({
      text: 'Timeline widget example with a valid given widget id'
    })(() => (
      <div className='centerContent'>
        <div className='selfCenter standardWidth'>
          <TwitterTimelineEmbed
            sourceType={'widget'}
            widgetId={'539487832448843776'}
            options={{ height: 400 }}
          />
        </div>
      </div>
    ))
  )
  .add(
    'Timeline Autoheight',
    withInfo({
      text: 'Timeline autoheight example'
    })(() => (
      <div className='centerContent'>
        <div
          className='selfCenter'
          style={{ width: 250, height: 200, margin: 20 }}
        >
          <TwitterTimelineEmbed
            sourceType={'widget'}
            widgetId={'539487832448843776'}
            autoHeight
          />
        </div>
        <div
          className='selfCenter'
          style={{ width: 250, height: 300, margin: 20 }}
        >
          <TwitterTimelineEmbed
            sourceType={'widget'}
            widgetId={'539487832448843776'}
            autoHeight
          />
        </div>
        <div
          className='selfCenter'
          style={{ width: 250, height: 250, margin: 20 }}
        >
          <TwitterTimelineEmbed
            sourceType={'widget'}
            widgetId={'539487832448843776'}
            autoHeight
          />
        </div>
      </div>
    ))
  )
  .add(
    'Timeline dark Theme',
    withInfo({
      text: 'Timeline dark Theme example'
    })(() => (
      <div className='centerContent'>
        <div className='selfCenter standardWidth'>
          <TwitterTimelineEmbed
            sourceType={'timeline'}
            id={'539487832448843776'}
            theme={'dark'}
            options={{ height: 400 }}
          />
        </div>
      </div>
    ))
  )
  .add(
    'Timeline light Theme',
    withInfo({
      text: 'Timeline light Theme example'
    })(() => (
      <div className='centerContent'>
        <div className='selfCenter standardWidth'>
          <TwitterTimelineEmbed
            sourceType={'timeline'}
            id={'539487832448843776'}
            theme={'light'}
            options={{ height: 400 }}
          />
        </div>
      </div>
    ))
  )
  .add(
    'Timeline custom link color',
    withInfo({
      text: 'Timeline custom link color example'
    })(() => (
      <div className='centerContent'>
        <div className='selfCenter spaceBetween standardWidth'>
          <TwitterTimelineEmbed
            sourceType={'timeline'}
            id={'539487832448843776'}
            linkColor={'#F44336'}
            theme={'dark'}
            options={{ height: 400 }}
          />
        </div>
        <div className='selfCenter spaceBetween standardWidth'>
          <TwitterTimelineEmbed
            sourceType={'timeline'}
            id={'539487832448843776'}
            linkColor={'#CDDC39'}
            theme={'dark'}
            options={{ height: 400 }}
          />
        </div>
        <div className='selfCenter spaceBetween standardWidth'>
          <TwitterTimelineEmbed
            sourceType={'timeline'}
            id={'539487832448843776'}
            linkColor={'#4CAF50'}
            theme={'dark'}
            options={{ height: 400 }}
          />
        </div>
      </div>
    ))
  )
  .add(
    'Timeline custom border color',
    withInfo({
      text: 'Timeline custom border color example'
    })(() => (
      <div className='centerContent'>
        <div className='selfCenter spaceBetween standardWidth'>
          <TwitterTimelineEmbed
            sourceType={'timeline'}
            id={'539487832448843776'}
            borderColor={'#F44336'}
            theme={'dark'}
            options={{ height: 400 }}
          />
        </div>
        <div className='selfCenter spaceBetween standardWidth'>
          <TwitterTimelineEmbed
            sourceType={'timeline'}
            id={'539487832448843776'}
            borderColor={'#CDDC39'}
            theme={'dark'}
            options={{ height: 400 }}
          />
        </div>
        <div className='selfCenter spaceBetween standardWidth'>
          <TwitterTimelineEmbed
            sourceType={'timeline'}
            id={'539487832448843776'}
            borderColor={'#4CAF50'}
            theme={'dark'}
            options={{ height: 400 }}
          />
        </div>
      </div>
    ))
  )
  .add(
    'Timeline noHeader options',
    withInfo({
      text: 'Timeline noHeader options example'
    })(() => (
      <div className='centerContent'>
        <div className='selfCenter spaceBetween standardWidth'>
          <TwitterTimelineEmbed
            sourceType={'timeline'}
            id={'539487832448843776'}
            theme={'dark'}
            options={{ height: 400 }}
          />
        </div>
        <div className='selfCenter spaceBetween standardWidth'>
          <TwitterTimelineEmbed
            sourceType={'timeline'}
            id={'539487832448843776'}
            theme={'dark'}
            noHeader
            options={{ height: 400 }}
          />
        </div>
      </div>
    ))
  )
  .add(
    'Timeline noFooter options',
    withInfo({
      text: 'Timeline noFooter options example'
    })(() => (
      <div className='centerContent'>
        <div className='selfCenter spaceBetween standardWidth'>
          <TwitterTimelineEmbed
            sourceType={'timeline'}
            id={'539487832448843776'}
            theme={'dark'}
            options={{ height: 400 }}
          />
        </div>
        <div className='selfCenter spaceBetween standardWidth'>
          <TwitterTimelineEmbed
            sourceType={'timeline'}
            id={'539487832448843776'}
            theme={'dark'}
            noFooter
            options={{ height: 400 }}
          />
        </div>
      </div>
    ))
  )
  .add(
    'Timeline noHeader & noFooter options',
    withInfo({
      text: 'Timeline noHeader & noFooter options example'
    })(() => (
      <div className='centerContent'>
        <div className='selfCenter spaceBetween standardWidth'>
          <TwitterTimelineEmbed
            sourceType={'timeline'}
            id={'539487832448843776'}
            theme={'dark'}
            options={{ height: 400 }}
          />
        </div>
        <div className='selfCenter spaceBetween standardWidth'>
          <TwitterTimelineEmbed
            sourceType={'timeline'}
            id={'539487832448843776'}
            theme={'dark'}
            noHeader
            noFooter
            options={{ height: 400 }}
          />
        </div>
      </div>
    ))
  )
  .add(
    'Timeline with noborder',
    withInfo({
      text: 'Timeline with noborder'
    })(() => (
      <div className='centerContent'>
        <div className='selfCenter spaceBetween standardWidth'>
          <TwitterTimelineEmbed
            sourceType={'timeline'}
            id={'539487832448843776'}
            options={{ height: 400 }}
            theme={'dark'}
          />
        </div>
        <div className='selfCenter spaceBetween standardWidth'>
          <TwitterTimelineEmbed
            sourceType={'timeline'}
            id={'539487832448843776'}
            theme={'dark'}
            options={{ height: 400 }}
            noBorders
          />
        </div>
      </div>
    ))
  )
  .add(
    'Timeline with noScrollbar',
    withInfo({
      text: 'Timeline with noScrollbar'
    })(() => (
      <div className='centerContent'>
        <div className='selfCenter spaceBetween standardWidth'>
          <TwitterTimelineEmbed
            sourceType={'timeline'}
            id={'539487832448843776'}
            options={{ height: 400 }}
            theme={'dark'}
          />
        </div>
        <div className='selfCenter spaceBetween standardWidth'>
          <TwitterTimelineEmbed
            sourceType={'timeline'}
            id={'539487832448843776'}
            theme={'dark'}
            options={{ height: 400 }}
            noScrollbar
          />
        </div>
      </div>
    ))
  )
  .add(
    'Timeline with transparent background',
    withInfo({
      text: 'Timeline with transparent background example'
    })(() => (
      <div className='centerContent'>
        <div className='selfCenter spaceBetween standardWidth'>
          <TwitterTimelineEmbed
            sourceType={'timeline'}
            id={'539487832448843776'}
            options={{ height: 400 }}
            theme={'dark'}
          />
        </div>
        <div className='selfCenter spaceBetween standardWidth'>
          <TwitterTimelineEmbed
            sourceType={'timeline'}
            id={'539487832448843776'}
            theme={'dark'}
            options={{ height: 400 }}
            transparent
          />
        </div>
      </div>
    ))
  )
  .add(
    'Timeline with custom language',
    withInfo({
      text: 'Timeline with custom language example'
    })(() => (
      <div className='centerContent'>
        <div className='selfCenter spaceBetween standardWidth'>
          <TwitterTimelineEmbed
            sourceType={'timeline'}
            id={'539487832448843776'}
            options={{ height: 400 }}
            theme={'dark'}
            lang={'hi'}
          />
        </div>
        <div className='selfCenter spaceBetween standardWidth'>
          <TwitterTimelineEmbed
            sourceType={'timeline'}
            id={'539487832448843776'}
            theme={'dark'}
            options={{ height: 400 }}
            lang={'es'}
          />
        </div>
        <div className='selfCenter spaceBetween standardWidth'>
          <TwitterTimelineEmbed
            sourceType={'timeline'}
            id={'539487832448843776'}
            theme={'dark'}
            options={{ height: 400 }}
            lang={'fr'}
          />
        </div>
      </div>
    ))
  )
  .add(
    'Timeline with text placeholder while loading',
    withInfo({
      text: 'Timeline with text placeholder while loading'
    })(() => (
      <div className='centerContent'>
        <div className='selfCenter spaceBetween standardWidth'>
          <TwitterTimelineEmbed
            sourceType={'timeline'}
            id={'539487832448843776'}
            options={{ height: 400 }}
            theme={'dark'}
            lang={'hi'}
            placeholder={'Loading'}
          />
        </div>
      </div>
    ))
  )
  .add(
    'Timeline with component placeholder while loading',
    withInfo({
      text: 'Timeline compoennt text placeholder while loading'
    })(() => (
      <div className='centerContent'>
        <div className='selfCenter spaceBetween standardWidth'>
          <TwitterTimelineEmbed
            sourceType={'timeline'}
            id={'539487832448843776'}
            options={{ height: 400 }}
            theme={'dark'}
            lang={'hi'}
            placeholder={(
              <div style={{padding: 10, margin: 10, backgroundColor: 'red', color: 'white'}}>
                Hello I am custom placeholder
              </div>
            )}
          />
        </div>
      </div>
    ))
  )
  .add(
    'Timeline with onLoad function callback',
    withInfo({
      text: 'Timeline with onLoad function callback'
    })(() => (
      <div className='centerContent'>
        <div className='selfCenter spaceBetween standardWidth'>
          <TwitterTimelineEmbed
            sourceType={'timeline'}
            id={'539487832448843776'}
            options={{ height: 400 }}
            theme={'dark'}
            lang={'hi'}
            onLoad={action('Timeline loaded')}
          />
        </div>
      </div>
    ))
  )
  .add(
    'Timeline with tweet limit',
    withInfo({
      text: 'Timeline with tweet limit'
    })(() => (
      <div className='centerContent'>
        <div className='selfCenter spaceBetween standardWidth'>
          <TwitterTimelineEmbed
            sourceType={'timeline'}
            id={'539487832448843776'}
            options={{ height: 400, tweetLimit: 10 }}
          />
        </div>
      </div>
    ))
  )


storiesOf('Twitter Share button', module)
  .add(
    'Share button',
    withInfo({
      text: 'Twitter share button example'
    })(() => (
      <div className='centerContent'>
        <div className='selfCenter'>
          <TwitterShareButton
            url={'https://facebook.com/saurabhnemade'}
            options={{ text: '#reactjs is awesome', via: 'saurabhnemade' }}
          />
          <TwitterShareButton
            url={'https://facebook.com/saurabhnemade'}
            options={{
              text: '#reactjs is awesome',
              via: 'saurabhnemade',
              size: 'large'
            }}
          />
        </div>
      </div>
    ))
  )
  .add(
    'Share button with text placeholder',
    withInfo({
      text: 'Twitter share button with text placeholder example'
    })(() => (
      <div className='centerContent'>
        <div className='selfCenter'>
          <TwitterShareButton
            url={'https://facebook.com/saurabhnemade'}
            options={{
              text: '#reactjs is awesome',
              via: 'saurabhnemade',
              size: 'large'
            }}
            placeholder={'Loading'}
          />
        </div>
      </div>
    ))
  )
  .add(
    'Share button with custom placeholder',
    withInfo({
      text: 'Twitter share button with custom placeholder example'
    })(() => (
      <div className='centerContent'>
        <div className='selfCenter'>
          <TwitterShareButton
            url={'https://facebook.com/saurabhnemade'}
            options={{
              text: '#reactjs is awesome',
              via: 'saurabhnemade',
              size: 'large'
            }}
            placeholder={(
              <div style={{padding: 10, margin: 10, backgroundColor: 'red', color: 'white'}}>
                Hello I am custom placeholder
              </div>
            )}
          />
        </div>
      </div>
    ))
  )
  .add(
    'Share button with onLoad function',
    withInfo({
      text: 'Twitter share button with onLoad function example'
    })(() => (
      <div className='centerContent'>
        <div className='selfCenter'>
          <TwitterShareButton
            url={'https://facebook.com/saurabhnemade'}
            options={{
              text: '#reactjs is awesome',
              via: 'saurabhnemade',
              size: 'large'
            }}
            onLoad={action('Loaded successfully')}
          />
        </div>
      </div>
    ))
  )

storiesOf('Twitter Follow button', module)
  .add(
    'Follow button',
    withInfo({
      text: 'Twitter follow button example'
    })(() => (
      <div className='centerContent'>
        <div className='selfCenter'>
          <TwitterFollowButton screenName={'saurabhnemade'} />
          <TwitterFollowButton
            screenName={'saurabhnemade'}
            options={{ size: 'large' }}
          />
        </div>
      </div>
    ))
  )
  .add(
    'Follow button with text placeholder',
    withInfo({
      text: 'Twitter follow button with text placeholder example'
    })(() => (
      <div className='centerContent'>
        <div className='selfCenter'>
          <TwitterFollowButton
            screenName={'saurabhnemade'}
            options={{ size: 'large' }}
            placeholder={'Loading'}
          />
        </div>
      </div>
    ))
  )
  .add(
    'Follow button with custom placeholder',
    withInfo({
      text: 'Twitter follow button with custom placeholder example'
    })(() => (
      <div className='centerContent'>
        <div className='selfCenter'>
          <TwitterFollowButton
            screenName={'saurabhnemade'}
            options={{ size: 'large' }}
            placeholder={(
              <div style={{padding: 10, margin: 10, backgroundColor: 'red', color: 'white'}}>
                Hello I am custom placeholder
              </div>
            )}
          />
        </div>
      </div>
    ))
  )
  .add(
    'Follow button with onLoad function',
    withInfo({
      text: 'Twitter follow button with onLoad function example'
    })(() => (
      <div className='centerContent'>
        <div className='selfCenter'>
          <TwitterFollowButton
            screenName={'saurabhnemade'}
            options={{ size: 'large' }}
            onLoad={action('Loaded successfully')}
          />
        </div>
      </div>
    ))
  )

storiesOf('Twitter Hashtag button', module)
  .add(
    'Hashtag button',
    withInfo({
      text: 'Twitter hashtag button example'
    })(() => (
      <div className='centerContent'>
        <div className='selfCenter'>
          <TwitterHashtagButton tag={'cybersecurity'} />
          <TwitterHashtagButton
            tag={'cybersecurity'}
            options={{ size: 'large' }}
          />
        </div>
      </div>
    ))
  )
  .add(
    'Hashtag button with text placeholder',
    withInfo({
      text: 'Twitter hashtag button example'
    })(() => (
      <div className='centerContent'>
        <div className='selfCenter'>
          <TwitterHashtagButton
            tag={'cybersecurity'}
            options={{ size: 'large' }}
            placeholder={'Loading'}
          />
        </div>
      </div>
    ))
  )
  .add(
    'Hashtag button with custom placeholder',
    withInfo({
      text: 'Twitter hashtag custom placeholder example'
    })(() => (
      <div className='centerContent'>
        <div className='selfCenter'>
          <TwitterHashtagButton
            tag={'cybersecurity'}
            options={{ size: 'large' }}
            placeholder={(
              <div style={{padding: 10, margin: 10, backgroundColor: 'red', color: 'white'}}>
                Hello I am custom placeholder
              </div>
            )}
          />
        </div>
      </div>
    ))
  )
  .add(
    'Hashtag button with onLoad function',
    withInfo({
      text: 'Twitter hashtag onLoad example'
    })(() => (
      <div className='centerContent'>
        <div className='selfCenter'>
          <TwitterHashtagButton
            tag={'cybersecurity'}
            options={{ size: 'large' }}
            onLoad={action('Loaded successfully')}
          />
        </div>
      </div>
    ))
  )

storiesOf('Twitter Mention button', module)
  .add(
    'Mention button',
    withInfo({
      text: 'Twitter Mention button example'
    })(() => (
      <div className='centerContent'>
        <div className='selfCenter'>
          <TwitterMentionButton screenName={'saurabhnemade'} />
          <TwitterMentionButton
            screenName={'saurabhnemade'}
            options={{ size: 'large' }}
          />
        </div>
      </div>
    ))
  )
  .add(
    'Mention button with text placeholder',
    withInfo({
      text: 'Twitter Mention button with text placeholder example'
    })(() => (
      <div className='centerContent'>
        <div className='selfCenter'>
          <TwitterMentionButton
            screenName={'saurabhnemade'}
            options={{ size: 'large' }}
            placeholder={'Loading'}
          />
        </div>
      </div>
    ))
  )
  .add(
    'Mention button with custom placeholder',
    withInfo({
      text: 'Twitter Mention button with custom placeholder example'
    })(() => (
      <div className='centerContent'>
        <div className='selfCenter'>
          <TwitterMentionButton
            screenName={'saurabhnemade'}
            options={{ size: 'large' }}
            placeholder={(
              <div style={{padding: 10, margin: 10, backgroundColor: 'red', color: 'white'}}>
                Hello I am custom placeholder
              </div>
            )}
          />
        </div>
      </div>
    ))
  )
  .add(
    'Mention button with onLoad function',
    withInfo({
      text: 'Twitter Mention button with onLoad function example'
    })(() => (
      <div className='centerContent'>
        <div className='selfCenter'>
          <TwitterMentionButton
            screenName={'saurabhnemade'}
            options={{ size: 'large' }}
            onLoad={action('Loaded successfully')}
          />
        </div>
      </div>
    ))
  )

storiesOf('Twitter Tweet Embed', module)
  .add(
    'Tweet embed',
    withInfo({
      text: 'Tweet embed'
    })(() => (
      <div className='centerContent'>
        <div className='selfCenter'>
          <TwitterTweetEmbed tweetId={'933354946111705097'} />
        </div>
      </div>
    ))
  )
  .add(
    'Tweet with media embed',
    withInfo({
      text: 'Tweet with media embed'
    })(() => (
      <div className='centerContent'>
        <div className='selfCenter'>
          <TwitterTweetEmbed tweetId={'1083592734038929408'} />
        </div>
      </div>
    ))
  )
  .add(
    'Tweet with media embed with text placeholder',
    withInfo({
      text: 'Tweet with media embed with text placeholder'
    })(() => (
      <div className='centerContent'>
        <div className='selfCenter'>
          <TwitterTweetEmbed tweetId={'1083592734038929408'} placeholder={'Loading'} />
        </div>
      </div>
    ))
  )
  .add(
    'Tweet with media embed with custom placeholder',
    withInfo({
      text: 'Tweet with media embed with custom placeholder'
    })(() => (
      <div className='centerContent'>
        <div className='selfCenter'>
          <TwitterTweetEmbed tweetId={'1083592734038929408'} placeholder={(
            <div style={{padding: 10, margin: 10, backgroundColor: 'red', color: 'white'}}>
              Hello I am custom placeholder
            </div>
          )} />
        </div>
      </div>
    ))
  )
  .add(
    'Tweet with media embed with onLoad function',
    withInfo({
      text: 'Tweet with media embed with onLoad function'
    })(() => (
      <div className='centerContent'>
        <div className='selfCenter'>
          <TwitterTweetEmbed
            tweetId={'1083592734038929408'}
            options={{ cards: 'hidden', width: 300, maxWidth: 800 }}
            onLoad={action('Loaded successfully')}
          />
        </div>
      </div>
    ))
  )
  .add(
    'Tweet with media embed hide media',
    withInfo({
      text: 'Tweet with media embed hide media'
    })(() => (
      <div className='centerContent'>
        <div className='selfCenter'>
          <TwitterTweetEmbed
            tweetId={'1083592734038929408'}
            options={{ cards: 'hidden', width: 300, maxWidth: 800 }}
            onLoad={tweetWidgetEl => {
              const tweetEl = tweetWidgetEl.shadowRoot.querySelector('.EmbeddedTweet')
              tweetEl.style.width = '800px'
              tweetEl.style.maxWidth = '800px'
            }}
          />
        </div>
      </div>
    ))
  )
  .add(
    'Tweet with custom CSS',
    withInfo({
      text: 'Tweet with custom CSS'
    })(() => (
      <div className='centerContent'>
        <div className='selfCenter'>
          <TwitterTweetEmbed
            tweetId={'1083592734038929408'}
            onLoad={tweetWidgetEl => {
              const tweetEl = tweetWidgetEl.shadowRoot.querySelector('.EmbeddedTweet')
              tweetEl.style.border = '5px solid red'
            }}
          />
        </div>
      </div>
    ))
  )

storiesOf('Twitter Moment Share', module)
  .add(
    'Moment Share',
    withInfo({
      text: 'Share Life Moment'
    })(() => (
      <div className='centerContent'>
        <div className='selfCenter' style={{ height: 400, overflow: 'auto' }}>
          <TwitterMomentShare momentId='650667182356082688' />
        </div>
      </div>
    ))
  )
  .add(
    'Moment Share with text placeholder',
    withInfo({
      text: 'Share Life Moment with text placeholder'
    })(() => (
      <div className='centerContent'>
        <div className='selfCenter' style={{ height: 400, overflow: 'auto' }}>
          <TwitterMomentShare momentId='650667182356082688' placeholder={'Loading'} />
        </div>
      </div>
    ))
  )
  .add(
    'Moment Share with custom placeholder',
    withInfo({
      text: 'Share Life Moment with custom placeholder'
    })(() => (
      <div className='centerContent'>
        <div className='selfCenter' style={{ height: 400, overflow: 'auto' }}>
          <TwitterMomentShare momentId='650667182356082688' placeholder={(
            <div style={{padding: 10, margin: 10, backgroundColor: 'red', color: 'white'}}>
              Hello I am custom placeholder
            </div>
          )} />
        </div>
      </div>
    ))
  )
  .add(
    'Moment Share with onLoad function',
    withInfo({
      text: 'Share Life Moment with onLoad function'
    })(() => (
      <div className='centerContent'>
        <div className='selfCenter' style={{ height: 400, overflow: 'auto' }}>
          <TwitterMomentShare momentId='650667182356082688' onLoad={action('Loaded successfully')} />
        </div>
      </div>
    ))
  )

storiesOf('Twitter DM Button', module)
  .add(
    'Direct Message Button',
    withInfo({
      text: 'Add a message button with user id'
    })(() => (
      <div className='centerContent'>
        <div className='selfCenter spaceBetween'>
          <TwitterDMButton id={1364031673} />
        </div>
        <div className='selfCenter spaceBetween'>
          <TwitterDMButton id={1364031673} options={{ size: 'large' }} />
        </div>
      </div>
    ))
  )
  .add(
    'Direct Message Button with text placeholder',
    withInfo({
      text: 'DM button with text placeholder'
    })(() => (
      <div className='centerContent'>
        <div className='selfCenter spaceBetween'>
          <TwitterDMButton id={1364031673} options={{ size: 'large' }} placeholder={'Loading'} />
        </div>
      </div>
    ))
  )
  .add(
    'Direct Message Button with custom placeholder',
    withInfo({
      text: 'DM button with custom placeholder'
    })(() => (
      <div className='centerContent'>
        <div className='selfCenter spaceBetween'>
          <TwitterDMButton id={1364031673} options={{ size: 'large' }} placeholder={(
            <div style={{padding: 10, margin: 10, backgroundColor: 'red', color: 'white'}}>
              Hello I am custom placeholder
            </div>
          )} />
        </div>
      </div>
    ))
  )
  .add(
    'Direct Message Button with onLoad action',
    withInfo({
      text: 'DM button with onLoad action'
    })(() => (
      <div className='centerContent'>
        <div className='selfCenter spaceBetween'>
          <TwitterDMButton id={1364031673} options={{ size: 'large' }} placeholder={(
            <div style={{padding: 10, margin: 10, backgroundColor: 'red', color: 'white'}}>
              Hello I am custom placeholder
            </div>
          )} onLoad={action('Loaded successfully')}
          />
        </div>
      </div>
    ))
  )

storiesOf('Twitter Video Embed', module)
  .add(
    'Twitter video Embed',
    withInfo({
      text: 'Add a message button with user id'
    })(() => (
      <div className='centerContent'>
        <div className='selfCenter spaceBetween'>
          <TwitterVideoEmbed id={'560070183650213889'} />
        </div>
      </div>
    ))
  )
  .add(
    'Twitter video Embed with text placeholder',
    withInfo({
      text: 'Add a message button with user id & text placeholder'
    })(() => (
      <div className='centerContent'>
        <div className='selfCenter spaceBetween'>
          <TwitterVideoEmbed id={'560070183650213889'} placeholder={'Loading'} />
        </div>
      </div>
    ))
  )
  .add(
    'Twitter video Embed with custom placeholder',
    withInfo({
      text: 'Add a message button with user id & custom placeholder'
    })(() => (
      <div className='centerContent'>
        <div className='selfCenter spaceBetween'>
          <TwitterVideoEmbed id={'560070183650213889'} placeholder={(
            <div style={{padding: 10, margin: 10, backgroundColor: 'red', color: 'white'}}>
              Hello I am custom placeholder
            </div>
          )} />
        </div>
      </div>
    ))
  )
  .add(
    'Twitter video Embed with onLoad function',
    withInfo({
      text: 'Add a message button with onLoad function'
    })(() => (
      <div className='centerContent'>
        <div className='selfCenter spaceBetween'>
          <TwitterVideoEmbed id={'560070183650213889'} onLoad={action('Loaded successfully')} />
        </div>
      </div>
    ))
  )

storiesOf('Twitter Periscope Button', module)
  .add(
    'On Air button',
    withInfo({
      text:
        'Add on Air button with username. If user is broadcasting you will see Live in button.'
    })(() => (
      <div className='centerContent'>
        <div className='selfCenter spaceBetween'>
          <TwitterOnAirButton username={'KatmaiNPS'} />
        </div>
        <div className='selfCenter spaceBetween'>
          <TwitterOnAirButton
            username={'KatmaiNPS'}
            options={{ size: 'large' }}
          />
        </div>
      </div>
    ))
  )
  .add(
    'On Air button with text placeholder',
    withInfo({
      text:
        'Add on Air button with username. If user is broadcasting you will see Live in button. with text placeholder'
    })(() => (
      <div className='centerContent'>
        <div className='selfCenter spaceBetween'>
          <TwitterOnAirButton
            username={'KatmaiNPS'}
            options={{ size: 'large' }}
            placeholder={'Loading'}
          />
        </div>
      </div>
    ))
  )
  .add(
    'On Air button with custom placeholder',
    withInfo({
      text:
        'Add on Air button with username. If user is broadcasting you will see Live in button. with custom placeholder'
    })(() => (
      <div className='centerContent'>
        <div className='selfCenter spaceBetween'>
          <TwitterOnAirButton
            username={'KatmaiNPS'}
            options={{ size: 'large' }}
            placeholder={(
              <div style={{padding: 10, margin: 10, backgroundColor: 'red', color: 'white'}}>
                Hello I am custom placeholder
              </div>
            )}
          />
        </div>
      </div>
    ))
  )
  .add(
    'On Air button with onLoad function',
    withInfo({
      text:
        'Add on Air button with username. If user is broadcasting you will see Live in button. with onLoad function'
    })(() => (
      <div className='centerContent'>
        <div className='selfCenter spaceBetween'>
          <TwitterOnAirButton
            username={'KatmaiNPS'}
            options={{ size: 'large' }}
            onLoad={action('Loaded successfully')}
          />
        </div>
      </div>
    ))
  )
