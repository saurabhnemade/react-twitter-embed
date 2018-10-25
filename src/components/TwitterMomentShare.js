import React, { Component } from 'react'
import PropTypes from 'prop-types'
import script from 'scriptjs'

export default class TwitterMomentShare extends Component {
  static propTypes = {
    /**
     * id of Twitter moment to show
     */
    momentId: PropTypes.string.isRequired,
    /**
     * Additional options for overriding config.
     */
    options: PropTypes.object
  };

  componentDidMount() {
    script('https://platform.twitter.com/widgets.js', 'twitter-embed', () => {
      if (!window.twttr) {
        console.error('Failure to load window.twttr in TwitterMomentShare, aborting load.')
        return
      }

      if (!this.isMountCanceled) {
        window.twttr.widgets.createMoment(
          this.props.momentId,
          this.refs.shareMoment,
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
      <div ref='shareMoment' />
    )
  }
}
