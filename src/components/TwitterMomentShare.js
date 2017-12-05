import React, { Component } from 'react';
import PropTypes from 'prop-types';

const script = require('scriptjs');

script('https://platform.twitter.com/widgets.js', 'twitter-embed');

export default class TwitterMomentShare extends Component {
  static propTypes = {
    /**
     * id of Twitter moment to show
     */
    momentId: PropTypes.string.isRequired,
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

      window.twttr.widgets.createMoment(
        this.props.momentId,
        this.refs.shareMoment,
        this.props.options
      );
    });
  }

  render() {
    return (
      <div ref="shareMoment" />
    );
  }
}
