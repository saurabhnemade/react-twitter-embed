import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TwitterHashtagButton extends Component {
  static propTypes = {
    /**
     * Tag name for hashtag button
     */
    tag: PropTypes.string.isRequired,
    /**
     * Additional options to be added to the button
     */ 
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
