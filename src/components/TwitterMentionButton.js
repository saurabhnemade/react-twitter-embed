import React, { Component } from 'react';
import PropTypes from 'prop-types';

const script = require('scriptjs');

script('https://platform.twitter.com/widgets.js', 'twitter-embed');

export default class TwitterMentionButton extends Component {
  static propTypes = {
    /**
     * Username to which you will need to tweet
     */
    screenName: PropTypes.string.isRequired,
    /**
     * Additional options for overriding config.
     */
    options: PropTypes.object,
  };

  componentDidMount() {
    script.ready('twitter-embed', () => {
      if (!window.twttr) {
        console.error('Failure to load window.twttr, aborting load.');
        return;
      }

      window.twttr.widgets.createMentionButton(
        this.props.screenName,
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
