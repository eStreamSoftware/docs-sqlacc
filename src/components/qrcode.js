import React, { useState } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import { ImYoutube } from "react-icons/im";
import "@src/css/yt-player.css"

export const QRCodeGenerator = ({url}) => {
    const [showQR, setShowQR] = useState(false);

    const closePreview = () => setShowQR(false);

    return (
        <div style={{ textAlign: 'left', marginBottom: '20px' }}>
            <button
                onClick={() => setShowQR(true)}
                className='qr-button'
            >
                <ImYoutube size={25}/>
                <text style={{ paddingLeft: '5px' }}> View on Mobile</text>
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
                        flexDirection: 'column',
                    }}
                    onClick={closePreview}
                >
                    <p style={{ fontWeight: "bold", color: "white" }}>
                        Scan To Watch Video On Your Phone
                    </p>
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
