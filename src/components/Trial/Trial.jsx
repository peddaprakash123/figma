import React from "react";
import "./Trial.css";

function Trial() {
  return (
    <div className="trial-container">
      <h2 className="trial-heading">Start your free trial</h2>
      <p className="trial-subheading">
        Join over 4,000+ startups already growing with Untitled.
      </p>
      <div className="trial-buttons">
        <button className="learn-more-button">Learn more</button>
        <button className="get-started-button">Get started</button>
      </div>
    </div>
  );
}

export default Trial;
