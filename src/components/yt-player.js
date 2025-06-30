import React from 'react';
import ReactPlayer from 'react-player';
import "@src/css/yt-player.css";

export const VideoPlayer = ({ videoId }) => {
    const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;

    return (
        <ReactPlayer
            src={videoUrl}
            controls= {true}
            playing={true}
            muted={false}
            loop={true}
            style={{ width: '100%', height: 'auto', aspectRatio: '16/9' }}
        />
    );
};
