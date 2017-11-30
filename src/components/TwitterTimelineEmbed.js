import React, { Component } from 'react';
import PropTypes from "prop-types";

const script = require('scriptjs');

script('https://platform.twitter.com/widgets.js', 'twitter-embed');

export default class TwitterTimelineEmbed extends Component {
    static propTypes = {
        sourceType: PropTypes.oneOf(['profile', 'likes', 'list', 'collection', 'URL', 'widget']).isRequired,
        screenName: PropTypes.string.isRequired,
        options: PropTypes.options,
    };

    componentWillMount() {
        script.ready('twitter-embed', () => {
            if (!window.twttr) {
                console.error('Failure to load window.twttr, aborting load.');
                return;
            }

            window.twttr.widgets.createTimeline(
                {
                    sourceType: this.props.sourceType,
                    screenName: this.props.screenName
                },
                this.refs.embedContainer,
                this.props.options
            )
        });
    }

    render() {
        return (
            <div ref="embedContainer"></div>
        );
    }
}
