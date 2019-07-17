import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ExecutionEnvironment from 'exenv'
import twitter_widget_js from './twitter-widget-url'

export default class TwitterFollowButton extends Component {
  static propTypes = {
    /**
         * Username of twitter user which will be followed on click
         */
    screenName: PropTypes.string.isRequired,
    /**
         * Additional options to be added to the button
         */
    options: PropTypes.object,
    /**
         * Function to call when the button is pressed
         */
    onClick: PropTypes.func
  };

  onClick = (event) => {
    if (this.props.onClick && !this.isMountCanceled && this.refs.embedContainer.contains(event.target)) {
      this.props.onClick(event)
    }
  }

  componentDidMount() {
    if (ExecutionEnvironment.canUseDOM) {
      let script = require('scriptjs')
      script(twitter_widget_js, 'twitter-embed', () => {
        if (!window.twttr) {
          console.error('Failure to load window.twttr in TwitterFollowButton, aborting load.')
          return
        }

        if (!this.isMountCanceled) {
          window.twttr.widgets.createFollowButton(
            this.props.screenName,
            this.refs.embedContainer,
            this.props.options
          )
          if (this.props.onClick) {
            window.twttr.events.bind('click', this.onClick)
          }
        }
      })
    }
  }

  componentWillUnmount() {
    this.isMountCanceled = true
    if (window.twttr) {
      window.twttr.events.unbind('click', this.onClick)
    }
  }

  render() {
    return (
      <div ref='embedContainer' />
    )
  }
}
