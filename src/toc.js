import React from "react";
import "@site/static/css/toc-card.css"

// styling
const containerStyle = {
  width: "100%",
  paddingLeft: "1rem",
  paddingRight: "1rem",
  marginLeft: "auto",
  marginRight: "auto",
};

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
  gap: "1rem",
};

const headerStyle = {
  fontWeight: "bold",
  fontSize: "1.5rem",
  marginLeft: "auto",
  marginRight: "auto",
};

const Card = ({text, link}) => {
    return (<a href={link} className="toc-card">{text}</a>);
}

export const TOC = ({dataEntryList, advancedList}) => {
  return (
    <div style={containerStyle}>
      <div style={gridStyle}>
        {/* Headers */}
        <text style={headerStyle}>📘 Data Entry</text>
        <text style={headerStyle}>🚀 Advanced</text>

        {/* Content Grid */}
        {dataEntryList.map((entry) => (
            <Card text={entry.text} link={entry.link}/>
        ))}
        {advancedList.map((entry) => (
            <Card text={entry.text} link={entry.link}/>
        ))}
      </div>
    </div>
  );
};
