import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ExecutionEnvironment from 'exenv'
import twitter_widget_js from './twitter-widget-url'

export default class TwitterOnAirButton extends Component {
  static propTypes = {
    /**
     * Username for which you require periscope on air button
     */
    username: PropTypes.string.isRequired,
    /**
     * Additional options for overriding config.
     */
    options: PropTypes.object
  };

  componentDidMount() {
    if (ExecutionEnvironment.canUseDOM) {
      let script = require('scriptjs')
      script(twitter_widget_js, 'twitter-embed', () => {
        if (!window.twttr) {
          console.error('Failure to load window.twttr in TwitterOnAirButton, aborting load.')
          return
        }

        if (!this.isMountCanceled) {
          window.twttr.widgets.createPeriscopeOnAirButton(
            this.props.username,
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
