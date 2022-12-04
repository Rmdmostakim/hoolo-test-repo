import React from 'react'

export default function VideoCard(props) {
    const {logo,name,title,view} = props;
  return (
    <div className="RecordedLiveVideoCard">
        <div className='Recorded livecardheader'>
            <div className='livestoreLogo'>
                <img
                src={props.videos.store_logo ? props.videos.store_logo : storeLogo}
                alt={props.videos.store_name}
                />
            </div>
            <div className='liveping' style={{color:'white'}}></div>
        </div> 
        <div className='Recorded livevidcard'>
            <LiveVideoPlayer cover={data.cover} src={data.src}/>
        </div>
        <div className='Recorded livecardfooter'>
            <div className='livevidtitle'>
            <b className='vidtitle' style={{color:'white'}}> bing bang ting tang ching chang mang mang</b>
            </div>
        </div> 
    </div>
  )
}
