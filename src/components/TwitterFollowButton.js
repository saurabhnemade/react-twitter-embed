import React, { Component } from 'react'
import PropTypes from 'prop-types'
import script from 'scriptjs'

export default class TwitterFollowButton extends Component {
  static propTypes = {
    /**
         * Username of twitter user which will be followed on click
         */
    screenName: PropTypes.string.isRequired,
    /**
         * Additional options to be added to the button
         */
    options: PropTypes.object
  };

  componentDidMount() {
    script('https://platform.twitter.com/widgets.js', 'twitter-embed', () => {
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
      }
    })
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
