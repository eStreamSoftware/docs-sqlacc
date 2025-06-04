import React, { useEffect, useRef } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import 'videojs-youtube';
import "@src/css/yt-player.css";

export const VideoPlayer = ({ videoId }) => {
    const videoNode = useRef(null);
    const player = useRef(null);

    useEffect(() => {
        if (videoNode.current) {
            player.current = videojs(videoNode.current, {
                techOrder: ['youtube'],
                controls: true,
                autoplay: true,
                preload: 'auto',
                muted: true,
                sources: [
                    {
                        src: `https://www.youtube.com/embed/${videoId}?autoplay=1`,
                        type: 'video/youtube',
                    },
                ],
                youtube: {
                    rel: 0, // Disables related videos at the end
                    iv_load_policy: 3, // Hides video annotations
                },
            });
            player.current.ready(() => {
                const iframe = player.current.el().querySelector('iframe');
                if (iframe) {
                    iframe.style.pointerEvents = 'none';
                }
                
                const playButton = player.current.el().querySelector('.vjs-big-play-button');
                if (playButton) {
                    playButton.style.display = 'none';
                }
            });

            return () => {
                if (player.current) {
                    player.current.dispose();
                }
            };
        }
    }, [videoId]);

    return (
        <div data-vjs-player>
            <video
                ref={videoNode}
                className="video-js vjs-default-skin"
                playsInline
            />
        </div>
    );
};
