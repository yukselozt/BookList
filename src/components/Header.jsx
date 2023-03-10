import React from "react";

export default function Header() {
  return (
    <div className="header">
      <div className="header-logo">
        <img src="Logo.png" alt="" />
      </div>
      <div className="header-searchbar">
        <div className="header-searchbar-elements">
          <img alt="" src="vector.jpg" />
          <label>Search</label>
        </div>
      </div>
      <div className="header-icons">
        <div>
          <img alt="" src="profile.png" />
        </div>
        <div>
          <img alt="" src="heart.png" />
        </div>
        <div>
          <img alt="" src="market.png" />
        </div>
      </div>
    </div>
  );
}
