import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ExecutionEnvironment from 'exenv'
import twitter_widget_js from './twitter-widget-url'

export default class TwitterVideoEmbed extends Component {
  static propTypes = {
    /**
         * Id of video tweet.
         */
    id: PropTypes.string.isRequired
  };

  componentDidMount() {
    if (ExecutionEnvironment.canUseDOM) {
      let script = require('scriptjs')
      script(twitter_widget_js, 'twitter-embed', () => {
        if (!window.twttr) {
          console.error('Failure to load window.twttr in TwitterVideoEmbed, aborting load.')
          return
        }
        if (!this.isMountCanceled) {
          window.twttr.widgets.createVideo(
            this.props.id,
            this.refs.embedContainer
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
