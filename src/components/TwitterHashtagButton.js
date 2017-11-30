import React, { Component } from 'react';
import PropTypes from 'prop-types';

const script = require('scriptjs');

script('https://platform.twitter.com/widgets.js', 'twitter-embed');

export default class TwitterHashtagButton extends Component {
  static propTypes = {
        /**
         * Tag name for hashtag button
         */
    tag: PropTypes.string.isRequired,
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

      window.twttr.widgets.createHashtagButton(
                this.props.tag,
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
