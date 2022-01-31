import React from 'react';
import twitterWidgetJs from './twiter-widget-url';

interface UseEventsProps {
  loaded?: (event: { widgets: any }) => void;
  rendered?: (event: { target: any }) => void;
  tweet?: (event: any) => void;
  follow?: (event: { data: any }) => void;
  retweet?: (event: { data: any }) => void;
  like?: (event: { data: any }) => void;
  click?: (intentEvent: any) => void;
}

const useTwitterEvents = (props: UseEventsProps) => {
  React.useEffect(() => {
    const script = require('scriptjs');
    script(twitterWidgetJs, 'twitter-embed', () => {
      if (props.loaded && typeof props.loaded === 'function') {
        window.twttr.events.bind('loaded', props.loaded);
      }

      if (props.rendered && typeof props.rendered === 'function') {
        window.twttr.events.bind('rendered', props.rendered);
      }

      if (props.tweet && typeof props.tweet === 'function') {
        window.twttr.events.bind('tweet', props.tweet);
      }

      if (props.follow && typeof props.follow === 'function') {
        window.twttr.events.bind('follow', props.follow);
      }

      if (props.retweet && typeof props.retweet === 'function') {
        window.twttr.events.bind('retweet', props.retweet);
      }

      if (props.like && typeof props.like === 'function') {
        window.twttr.events.bind('like', props.like);
      }

      if (props.click && typeof props.click === 'function') {
        window.twttr.events.bind('click', props.click);
      }
    });
  }, [
    props.loaded,
    props.rendered,
    props.tweet,
    props.follow,
    props.retweet,
    props.like,
    props.click
  ]);
};

export default useTwitterEvents;
