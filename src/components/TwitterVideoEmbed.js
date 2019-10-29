import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ExecutionEnvironment from 'exenv'
import twitterWidgetJs from './twitter-widget-url'

export default class TwitterVideoEmbed extends Component {
  static propTypes = {
    /**
         * Id of video tweet.
         */
    id: PropTypes.string.isRequired,
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

  componentDidMount() {
    const { onLoad } = this.props
    if (ExecutionEnvironment.canUseDOM) {
      let script = require('scriptjs')
      script(twitterWidgetJs, 'twitter-embed', () => {
        if (!window.twttr) {
          console.error('Failure to load window.twttr in TwitterVideoEmbed, aborting load.')
          return
        }
        if (!this.isMountCanceled) {
          window.twttr.widgets.createVideo(
            this.props.id,
            this.refs.embedContainer
          ).then((element) => {
            this.setState({
              isLoading: false
            })
            if (onLoad) {
              onLoad(element)
            }
          })
        }
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
