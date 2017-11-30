import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TwitterTweetEmbed extends Component {
  static propTypes = {
    /**
     * Tweet id that needs to be shown
     */
    id: PropTypes.number.isRequired,
    /**
     * Additional options to pass to twitter widget plugin
     */
    options: PropTypes.object,
  };

  render() {
    return (
      <div>Sample html</div>
    );
  }
}
