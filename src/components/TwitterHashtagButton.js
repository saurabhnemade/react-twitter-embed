import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TwitterHashtagButton extends Component {
  static propTypes = {
    tag: PropTypes.string.isRequired,
    options: PropTypes.object
  };

  render() {
    return (
      <div>
        Sample html
      </div>
    );
  }
}
