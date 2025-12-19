import React from "react";
import "@src/css/toc-card.css"

// styling
const containerStyle = {
  width: "100%",
  paddingLeft: "1rem",
  paddingRight: "1rem",
  marginLeft: "auto",
  marginRight: "auto",
};

const sectionStyle = {
  marginBottom: "2rem",
};

const headerStyle = {
  fontWeight: "bold",
  fontSize: "1.5rem",
  textAlign: "center",
  marginBottom: "1.5rem",
};

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
  gap: "1.5rem",
};

const Card = ({ text, link, videoId }) => {
  if (videoId) {
    return (
      <a href={link} className="toc-card toc-card-video">
        <div className="toc-card-thumbnail">
          <img
            src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
          />
        </div>
        <div className="toc-card-content">
          {text}
        </div>
      </a>
    );
  }

  return (<a href={link} className="toc-card">{text}</a>);
}

export const TOC = ({ englishList = [], chineseList = [] }) => {
  return (
    <div style={containerStyle}>
      {/* English Section */}
      {englishList.length > 0 && (
        <div style={sectionStyle}>
          {/* Headers */}
          <h2 style={headerStyle}>English</h2>
          {/* Content Grid */}
          <div style={gridStyle}>
            {englishList.map((entry, index) => (
              <Card
                key={`english-${index}`}
                text={entry.text}
                link={entry.link}
                videoId={entry.videoId}
              />
            ))}
          </div>
        </div>
      )}

      {/* Chinese Section */}
      {chineseList.length > 0 && (
        <div style={sectionStyle}>
          {/* Headers */}
          <h2 style={headerStyle}>中文</h2>
          {/* Content Grid */}
          <div style={gridStyle}>
            {chineseList.map((entry, index) => (
              <Card
                key={`chinese-${index}`}
                text={entry.text}
                link={entry.link}
                videoId={entry.videoId}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};