import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { canUseDOM } from 'exenv'
import twitter_widget_js from './twitter-widget-url'

export default class TwitterShareButton extends Component {
  static propTypes = {
    /**
    * Url for sharing
    */
    url: PropTypes.string.isRequired,
    /**
    * Additional options for overriding config. Details at : https://dev.twitter.com/web/tweet-button/parameters
    */
    options: PropTypes.object
  };

  componentDidMount() {
    if (canUseDOM) {
      let script = require('scriptjs')
      script(twitter_widget_js, 'twitter-embed', () => {
        if (!window.twttr) {
          console.error('Failure to load window.twttr in TwitterShareButton, aborting load.')
          return
        }

        if (!this.isMountCanceled) {
          window.twttr.widgets.createShareButton(
            this.props.url,
            this.refs.embedContainer,
            this.props.options
          )
        }
      })
    }
  }

  componentWillUnmount() {
    this.isMountCanceled = true
  }

  render() {
    return (
      <div ref='embedContainer' />
    )
  }
}
