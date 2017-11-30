import React, { Component } from 'react';
import PropTypes from 'prop-types';

const script = require('scriptjs');

script('https://platform.twitter.com/widgets.js', 'twitter-embed');

export default class TwitterFollowButton extends Component {
  static propTypes = {
        /**
         * Username of twitter user which will be followed on click
         */
    screenName: PropTypes.string.isRequired,
        /**
         * Additional options to be added to the button
         */
    options: PropTypes.object,
  };

  componentDidMount() {
    script.ready('twitter-embed', () => {
      if (!window.twttr) {
        console.error('Failure to load window.twttr, aborting load.');
        return;
      }

      window.twttr.widgets.createFollowButton(
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
