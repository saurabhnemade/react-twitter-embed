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
        /**
         * With dark or light theme
         */
    theme: PropTypes.oneOf(['dark','light']),
        /**
         * With custom link colors. Note: Only Hex colors are supported.
         */
    linkColor: PropTypes.string,
        /**
         * With custom border colors. Note: Only Hex colors are supported.
         */
    borderColor: PropTypes.string,
        /**
         * Hide the header from timeline
         */
    noHeader: PropTypes.bool,
        /**
         * Hide the footer from timeline
         */
    noFooter: PropTypes.bool,
        /**
         * Hide the border from timeline
         */
    noBorders: PropTypes.bool,
        /**
         * Hide the scrollbars
         */
    noScrollbar: PropTypes.bool,
        /**
         * Enable Transparancy
         */
    transparent: PropTypes.bool,
        /**
         * Custom language code. Supported codes here: https://developer.twitter.com/en/docs/twitter-for-websites/twitter-for-websites-supported-languages/overview.html
         */
    lang: PropTypes.string    
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

      if (this.props.theme) {
        options.theme = this.props.theme;
      }

      if (this.props.linkColor) {
        options.linkColor=this.props.linkColor;
      }

      if (this.props.borderColor) {
        options.borderColor=this.props.borderColor;
      }

      if (this.props.lang) {
        options.lang = this.props.lang;
      }

      /** Append chrome options */
      options.chrome = '';

      if (this.props.noHeader) {
        options.chrome = options.chrome + ' noheader';
      }

      if (this.props.noFooter) {
        options.chrome = options.chrome + ' nofooter';
      }

      if (this.props.noBorders) {
        options.chrome = options.chrome + ' noborders';
      }

      if (this.props.noScrollbar) {
        options.chrome = options.chrome + ' noscrollbar';
      }
      
      if (this.props.transparent) {
        options.chrome = options.chrome + ' transparent';
      }

      if (!this.isMountCanceled) {
        window.twttr.widgets.createTimeline(
          {
            sourceType: this.props.sourceType,
            screenName: this.props.screenName,
            userId: this.props.userId,
            ownerScreenName: this.props.ownerScreenName,
            slug: this.props.slug,
            id: this.props.id || this.props.widgetId,
            url: this.props.url
          },
          this.refs.embedContainer,
          options
        );
      }
    });
  }

  componentWillUnmount() {
    this.isMountCanceled = true;
  }

  render() {
    return (
      <div ref="embedContainer"/>
    );
  }
}
