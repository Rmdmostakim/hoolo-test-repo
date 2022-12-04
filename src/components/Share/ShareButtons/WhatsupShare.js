import { WhatsappShareButton, WhatsappIcon } from "react-share";
import React from "react";

const WhatsupShare = ({ url, title, onSocialButtonClicked, socialType }) => {
    return (
        <WhatsappShareButton
            url={url}
            quote={title}
            onClick={() => onSocialButtonClicked(`${socialType||'button'} clicked.`)}
        >
            <WhatsappIcon
                size={40}
                round
            />
        </WhatsappShareButton>
    )
}

export default WhatsupShare