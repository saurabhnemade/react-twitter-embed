import React, { Component } from 'react'
import PropTypes from 'prop-types'
import script from 'scriptjs'

export default class TwitterTweetEmbed extends Component {
  static propTypes = {
    /**
         * Tweet id that needs to be shown
         */
    tweetId: PropTypes.string.isRequired,
    /**
         * Additional options to pass to twitter widget plugin
         */
    options: PropTypes.object
  };

  componentDidMount() {
    script('https://platform.twitter.com/widgets.js', 'twitter-embed', () => {
      if (!window.twttr) {
        console.error('Failure to load window.twttr in TwitterTweetEmbed, aborting load.')
        return
      }

      if (!this.isMountCanceled) {
        window.twttr.widgets.createTweet(
          this.props.tweetId,
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
