import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TwitterMentionButton extends Component {
  static propTypes = {
    screenName: PropTypes.string.isRequired,
    options: PropTypes.object,
  };

  render() {
    return (
      <div ref="embedContainer" />
    );
  }
}
