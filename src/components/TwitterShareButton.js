import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TwitterShareButton extends Component {
    static propTypes = {
        /**
         * Url for sharing
         */
        url: PropTypes.string.isRequired,
        /**
         * Additional options for overriding config. Details at : https://dev.twitter.com/web/tweet-button/parameters
         */
        options: PropTypes.object
    };

    render() {
        return (
            <div ref="embedContainer"></div>
        );
    }
}
