import React from 'react'
import { FacebookIcon, FacebookShareButton, WhatsappIcon, WhatsappShareButton } from 'react-share';
import axios from 'axios';

function ShareSocial(props) {
    const {url,videoId,updateCount,title} = props;

    const shareCount = ()=>{
        axios.get(` https://shop.hoolo.live/api/increamentShare/${videoId}`).then((res)=>{
            if(res.status === 200){
                updateCount();
            }
        });
    }

    return (
        <div className="text-center" quote={title}>
            <FacebookShareButton url={url} className="m-1">
                <FacebookIcon size="40" round onClick={shareCount} />
            </FacebookShareButton>
            <WhatsappShareButton url={url} title={title} separator="  ">
                <WhatsappIcon size="40" round onClick={shareCount} />
            </WhatsappShareButton>
        </div>
    );
}

export default ShareSocial;