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

export const TOC = ({ dataEntryList = [], advancedList = [] }) => {
  return (
    <div style={containerStyle}>
      {/* Data Entry Section */}
      {dataEntryList.length > 0 && (
        <div style={sectionStyle}>
          {/* Headers */}
          <h2 style={headerStyle}>📘 Data Entry</h2>
          {/* Content Grid */}
          <div style={gridStyle}>
            {dataEntryList.map((entry, index) => (
              <Card 
                key={`data-entry-${index}`}
                text={entry.text} 
                link={entry.link} 
                videoId={entry.videoId} 
              />
            ))}
          </div>
        </div>
      )}

      {/* Advanced Section */}
      {advancedList.length > 0 && (
        <div style={sectionStyle}>
          {/* Headers */}
          <h2 style={headerStyle}>🚀 Advanced</h2>
          {/* Content Grid */}
          <div style={gridStyle}>
            {advancedList.map((entry, index) => (
              <Card 
                key={`advanced-${index}`}
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