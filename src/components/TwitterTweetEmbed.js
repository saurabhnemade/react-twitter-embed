import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ExecutionEnvironment from 'exenv'
import twitterWidgetJs from './twitter-widget-url'

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
     * Placeholder while tweet is loading
     */
    placeholder: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    /**
     * Function to execute after load, return html element
     */
    onLoad: PropTypes.func
  };

  constructor(props) {
    super(props)
    this.state = {
      isLoading: true
    }
  }

  renderWidget() {
    const { onLoad } = this.props
    if (!window.twttr) {
      console.error('Failure to load window.twttr in TwitterTweetEmbed, aborting load.')
      return
    }
    if (!this.isMountCanceled) {
      window.twttr.widgets.createTweet(
        this.props.tweetId,
        this.refs.embedContainer,
        this.props.options
      ).then((element) => {
        this.setState({
          isLoading: false
        })
        if (onLoad) {
          onLoad(element)
        }
      })
    }
  }

  componentDidMount() {
    if (ExecutionEnvironment.canUseDOM) {
      let script = require('scriptjs')
      script(twitterWidgetJs, 'twitter-embed', () => {
        this.renderWidget()
      })
    }
  }

  componentWillUnmount() {
    this.isMountCanceled = true
  }

  render() {
    const { isLoading } = this.state
    const { placeholder } = this.props
    return (
      <React.Fragment>
        {isLoading && placeholder}
        <div ref='embedContainer' />
      </React.Fragment>
    )
  }
}
