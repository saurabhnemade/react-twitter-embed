import React, { Component } from 'react';
import PropTypes from 'prop-types';
import isRequiredIf from 'react-proptype-conditional-require';

const script = require('scriptjs');

script('https://platform.twitter.com/widgets.js', 'twitter-embed');

export default class TwitterTimelineEmbed extends Component {
  static propTypes = {
        /**
         * This can be either of profile, likes, list, collection, URL, widget
         */
    sourceType: PropTypes.oneOf(['profile', 'likes', 'list', 'collection', 'URL', 'widget']).isRequired,
        /**
         * username of twitter handle as String
         */
    screenName: isRequiredIf(PropTypes.string, props => !props.hasOwnProperty('userId') && (props.sourceType === 'profile' || props.sourceType === 'likes')),
        /**
         * UserId of twitter handle as number
         */
    userId: isRequiredIf(PropTypes.number, props => !props.hasOwnProperty('screenName') && (props.sourceType === 'profile' || props.sourceType === 'likes')),
        /**
         * To show list, used along with slug
         */
    ownerScreenName: isRequiredIf(PropTypes.string, props => props.sourceType === 'list' && !props.hasOwnProperty('id')),
        /**
         * To show list, used along with ownerScreenName
         */
    slug: isRequiredIf(PropTypes.string, props => props.sourceType === 'list' && !props.hasOwnProperty('id')),
        /**
         * To show list, unique list id
         * Also used with collections, in that case its valid collection id
         */
    id: isRequiredIf(PropTypes.oneOfType([PropTypes.number, PropTypes.string]), props => (props.sourceType === 'list' && !props.hasOwnProperty('ownerScreenName') && !props.hasOwnProperty('slug')) || props.sourceType === 'collection'),
        /**
         * To show twitter content with url.
         * Supported content includes profiles, likes, lists, and collections.
         */
    url: isRequiredIf(PropTypes.string, props => props.sourceType === 'url'),
        /**
         * To show custom widget
         */
    widgetId: isRequiredIf(PropTypes.string, props => props.sourceType === 'widget'),
        /**
         * Additional options to pass to twitter widget plugin
         */
    options: PropTypes.object,
        /**
         * Automatically fit into parent container height
         */
    autoHeight: PropTypes.bool,
  };

  componentDidMount() {
    script.ready('twitter-embed', () => {
      if (!window.twttr) {
        console.error('Failure to load window.twttr, aborting load.');
        return;
      }

      const options = Object.assign({}, this.props.options);

      if (this.props.autoHeight) {
        options.height = this.refs.embedContainer.parentNode.offsetHeight;
      }

      window.twttr.widgets.createTimeline(
        {
          sourceType: this.props.sourceType,
          screenName: this.props.screenName,
          userId: this.props.userId,
          ownerScreenName: this.props.ownerScreenName,
          slug: this.props.slug,
          id: this.props.id,
          url: this.props.url,
          widgetId: this.props.widgetId,
        },
        this.refs.embedContainer,
        options
      );
    });
  }

  render() {
    return (
      <div ref="embedContainer" />
    );
  }
}
