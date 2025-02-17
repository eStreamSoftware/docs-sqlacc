import React from "react";
import "@site/static/css/toc-card.css"

// styling
const containerStyle = {
  width: "100%",
  paddingLeft: "1rem",
  paddingRight: "1rem",
  marginLeft: "auto",
  marginRight: "auto",
  display: "flex",
};

const singleSectionStyle = {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
};

const twoSectionStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
}; 

const headerStyle = {
  fontWeight: "bold",
  fontSize: "1.5rem",
  marginLeft: "auto",
  marginRight: "auto",
};

const Card = ({ text, link }) => {
  return (<a href={link} className="toc-card">{text}</a>);
}

export const TOC = ({ dataEntryList = [], advancedList = [] }) => {

  const isSingle = dataEntryList.length === 0 || advancedList.length === 0;

  return (
    <div style={containerStyle}>
      {/* Data Entry Section */}
      {dataEntryList.length > 0 && (
        <div style={isSingle ? singleSectionStyle : twoSectionStyle}>
          {/* Headers */}
          <text style={headerStyle}>📘 Data Entry</text>
          {/* Content Grid */}
          {dataEntryList.map((entry) => (
            <Card text={entry.text} link={entry.link} />
          ))}
        </div>
      )}

      {/* Advanced Section */}
      {advancedList.length > 0 && (
        <div style={isSingle ? singleSectionStyle : twoSectionStyle}>
          {/* Headers */}
          <text style={headerStyle}>🚀 Advanced</text>
          {/* Content Grid */}
          {advancedList.map((entry) => (
            <Card text={entry.text} link={entry.link} />
          ))}
        </div>
      )}

    </div>
  );
};
