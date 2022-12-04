import { RedditShareButton, RedditIcon } from "react-share";
import React from "react";


const RedditShare = ({ url, title, onSocialButtonClicked, socialType }) => {
    return (
        <RedditShareButton
            url={url}
            title={title}
            onClick={() => onSocialButtonClicked(`${socialType} clicked.`)}
        >
            <RedditIcon
                size={40}
                round
            />
        </RedditShareButton>
    )
}

export default RedditShare;