import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ExecutionEnvironment from 'exenv'
import twitter_widget_js from './twitter-widget-url'

export default class TwitterTweetEmbed extends Component {
  static propTypes = {
    /**
         * Tweet id that needs to be shown
         */
    tweetId: PropTypes.string.isRequired,
    /**
         * Additional options to pass to twitter widget plugin
         */
    options: PropTypes.object,
    /**
         * Callback to call when the widget is loaded
         */
    onLoaded: PropTypes.func
  };

  renderWidget() {
    if (!window.twttr) {
      console.error('Failure to load window.twttr in TwitterTweetEmbed, aborting load.')
      return
    }
    if (!this.isMountCanceled) {
      window.twttr.widgets.createTweet(
        this.props.tweetId,
        this.refs.embedContainer,
        this.props.options
      ).then(el => {
        if (this.props.onLoaded) {
          this.props.onLoaded(el)
        }
      })
    }
  }

  componentDidMount() {
    if (ExecutionEnvironment.canUseDOM) {
      let script = require('scriptjs')
      script(twitter_widget_js, 'twitter-embed', () => {
        this.renderWidget()
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
