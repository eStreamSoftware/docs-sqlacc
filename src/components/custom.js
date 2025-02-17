import React, { useState, useEffect, useRef } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import 'videojs-youtube';
import { QRCodeCanvas } from 'qrcode.react';
import { IoQrCode } from 'react-icons/io5'; 

// const IframeWrapper = ({ src, title }) => {
//     return (
//         <iframe
//             width="100%"
//             style={{ aspectRatio: "16/9" }}
//             src={src}
//             title={title}
//             allowFullScreen
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
//         />
//     );
// }; 

const VideoPlayer = ({ videoId, title }) => {
    const videoNode = useRef(null);
    const player = useRef(null);

    useEffect(() => {
        if (videoNode.current) {
            player.current = videojs(videoNode.current, {
                techOrder: ['youtube'],
                controls: true,
                autoplay: true,
                preload: 'auto',
                muted: false,
                sources: [
                    {
                        src: `https://www.youtube.com/embed/${videoId}?autoplay=1`,
                        type: 'video/youtube',
                    },
                ],
                youtube: {
                    modestbranding: 1, // Removes the YouTube logo
                    rel: 0, // Disables related videos at the end
                    showinfo: 0, // Removes the video title and uploader info
                    iv_load_policy: 3, // Hides video annotations 
                },
                userActions: {
                    doubleClick: false, // Disable fullscreen on double-click
                },
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
                title={title}
            />
        </div>
    );
};

const QRCodeGenerator = ({url}) => {
    const [showQR, setShowQR] = useState(false);

    const closePreview = () => setShowQR(false);

    return (
        <div style={{ textAlign: 'left', marginBottom: '20px' }}>
            <button
                onClick={() => setShowQR(true)}
                style={{ padding: '10px', cursor: 'pointer'}}
            >
                <IoQrCode/>
            </button>

            {/* Full-screen preview modal */}
            {showQR && (
                <div
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        zIndex: 9999,
                    }}
                    onClick={closePreview}
                >
                    <QRCodeCanvas 
                        value={url} 
                        size={250} 
                        style={{
                            background: 'white',
                            padding: '10px',
                            borderRadius: '8px'
                        }}
                    />
                </div>
            )}
        </div>
    );
};

export { VideoPlayer, QRCodeGenerator };
