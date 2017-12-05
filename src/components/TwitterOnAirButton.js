import React, { Component } from 'react';
import PropTypes from 'prop-types';

const script = require('scriptjs');

script('https://platform.twitter.com/widgets.js', 'twitter-embed');

export default class TwitterOnAirButton extends Component {
  static propTypes = {
    /**
     * Username for which you require periscope on air button
     */
    username: PropTypes.string.isRequired,
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

      window.twttr.widgets.createPeriscopeOnAirButton(
        this.props.username,
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
