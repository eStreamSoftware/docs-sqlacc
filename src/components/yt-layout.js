import React from "react";
import { QRCodeGenerator } from "@src/components/qrcode.js";
import { VideoPlayer } from "@src/components/yt-player.js";

export const YtLayout = ({ videoId }) => {
  const url = `https://youtu.be/${videoId}`;
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "left", justifyContent: "center", gap: "1rem" }}>
      <VideoPlayer
        videoId={videoId}
      />

      <QRCodeGenerator url={url} />
    </div>
  );
};