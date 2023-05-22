import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";

function Header() {
  return (
    <div className="header">
      <img
        className="header__logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
      />
      <div className="header__Location">
        <span className="header__optionLineOne">Hello </span>
        <span className="header__optionLineTwo">Select your Location</span>
      </div>
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__language">
        <div className="dropdown">
          <input type="radio" id="english" value="English" name="language" />
          <label htmlFor="english">English - EN</label>
          <input type="radio" id="hindi" value="Hindi" name="language" />
          <label htmlFor="hindi">हिन्दी - HI</label>
          <input type="radio" id="tamil" value="Tamil" name="language" />
          <label htmlFor="tamil">தமிழ் - TA</label>
          <input type="radio" id="bangla" value="Bangla" name="language" />
          <label htmlFor="bangla">বাংলা - BN</label>
          <input type="radio" id="marathi" value="Marathi" name="language" />
          <label htmlFor="marathi">मराठी - MR</label>
        </div>
      </div>

      <div className="header__option">
        <span className="header__optionLineOne">Hello,sign in </span>
        <span className="header__optionLineTwo">Account & Lists </span>
      </div>
      <div className="header__option">
        <span className="header__optionLineOne">Returns </span>
        <span className="header__optionLineTwo">& Orders </span>
      </div>
      <div className="header__option">
        <span className="header__optionLineOne">Your </span>
        <span className="header__optionLineTwo">Prime </span>
      </div>
    </div>
  );
}

export default Header;
