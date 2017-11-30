import React, { Component } from 'react';
import PropTypes from 'prop-types';

const script = require('scriptjs');

script('https://platform.twitter.com/widgets.js', 'twitter-embed');

export default class TwitterShareButton extends Component {
  static propTypes = {
    /**
    * Url for sharing
    */
    url: PropTypes.string.isRequired,
    /**
    * Additional options for overriding config. Details at : https://dev.twitter.com/web/tweet-button/parameters
    */
    options: PropTypes.object,
  };

  componentDidMount() {
    script.ready('twitter-embed', () => {
      if (!window.twttr) {
        console.error('Failure to load window.twttr, aborting load.');
        return;
      }

      window.twttr.widgets.createShareButton(
                this.props.url,
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
