import React, { Component } from 'react';
import PropTypes from 'prop-types';

const script = require('scriptjs');

script('https://platform.twitter.com/widgets.js', 'twitter-embed');

export default class TwitterTweetEmbed extends Component {
  static propTypes = {
        /**
         * Tweet id that needs to be shown
         */
    tweetId: PropTypes.string.isRequired,
        /**
         * Additional options to pass to twitter widget plugin
         */
    options: PropTypes.object,
  };

  componentDidMount() {
    script.ready('twitter-embed', () => {
      if (!window.twttr) {
        console.error('Failure to load window.twttr, aborting load.');
        return;
      }

      window.twttr.widgets.createTweet(
        this.props.tweetId,
        this.refs.embedContainer,
        this.props.options
      );
    });
  }

  render() {
    return (
      <div ref="embedContainer" />
    );
  }
}
