import React from "react";
import { QRCodeGenerator } from "@site/src/qrcode.js";
import { VideoPlayer } from "@site/src/yt-player.js";

export const YtLayout = ({ url, videoId, title }) => {

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "left", justifyContent: "center", gap: "1rem" }}>
      <VideoPlayer
        videoId={videoId}
        title={title} />

      <QRCodeGenerator url={url} />
    </div>
  );
};