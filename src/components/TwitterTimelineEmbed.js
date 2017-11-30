import React, { Component } from 'react';

const script = require('scriptjs');

script('https://platform.twitter.com/widgets.js', 'twitter-embed');

export default class TwitterTimelineEmbed extends Component {
  render() {
    return (
      <div>Twitter timeline component</div>
    );
  }
}
