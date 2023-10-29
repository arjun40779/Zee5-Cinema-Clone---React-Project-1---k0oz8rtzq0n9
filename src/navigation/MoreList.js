import React, { useState } from "react";
import "./navbar.css";
const MoreList = ({ msg }) => {
  
  const [isListVisible, setListVisible] = useState(false);

  const displayList = () => {
    setListVisible(true);
  };

  const hideList = () => {
    setListVisible(false);
  };

  return (
    <div onMouseOver={displayList} onMouseOut={hideList}>
      <div className="grids">
        {/* Your grid items */}
        <div className="grid"></div>
        <div className="grid"></div>
        <div className="grid"></div>
        <div className="grid"></div>
        <div className="grid"></div>
        <div className="grid"></div>
        <div className="grid"></div>
        <div className="grid"></div>
        <div className="grid"></div>
      </div>
      {isListVisible && (
        <ul className={`more-list`} id="more-list">
          <li onClick={msg}>Recent</li>
          <li onClick={msg}>Live TV</li>
          <li onClick={msg}>Music</li>
          <li onClick={msg}>Sports</li>
          <li onClick={msg}>Kids</li>
          <li onClick={msg}>Songs</li>
          <li onClick={msg}>Videos</li>
        </ul>
      )}
    </div>
  );
};
export default MoreList;
