import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LocationOnIcon from "@mui/icons-material/LocationOn";

function Header() {
  return (
    <div>
      <div className="header">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
        <div className="header__Location">
          <LocationOnIcon className="header__locationIcon" />
          <div>
            <span className="header__optionLineOne">Hello </span>
            <br />
            <span className="header__optionLineTwo">Select your Location</span>
          </div>
        </div>
        <div className="header__search">
          <input
            className="header__searchInput"
            type="text"
            placeholder="Search Amazon.in"
          />
          <SearchIcon className="header__searchIcon" />
        </div>

        <div className="header__language">
          <div className="dropdown">
            <label
              className="header__languageLabel"
              htmlFor="language-dropdown"
            >
              EN
            </label>
            <input
              type="checkbox"
              id="language-dropdown"
              className="header__languageCheckbox"
            />
            <div className="header__languageOptions">
              <input
                type="radio"
                id="english"
                value="English"
                name="language"
              />
              <label htmlFor="english">English - EN</label>
              <input type="radio" id="hindi" value="Hindi" name="language" />
              <label htmlFor="hindi">हिन्दी - HI</label>
              <input type="radio" id="tamil" value="Tamil" name="language" />
              <label htmlFor="tamil">தமிழ் - TA</label>
              <input type="radio" id="bangla" value="Bangla" name="language" />
              <label htmlFor="bangla">বাংলা - BN</label>
              <input
                type="radio"
                id="marathi"
                value="Marathi"
                name="language"
              />
              <label htmlFor="marathi">मराठी - MR</label>
            </div>
          </div>
        </div>

        <div className="header__option">
          <span className="header__optionLineOne">Hello, sign in </span>
          <br></br>
          <span className="header__optionLineTwo">Account & Lists </span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Returns </span>
          <br></br>
          <span className="header__optionLineTwo">& Orders </span>
        </div>

        <div className="header__option">
          <span className="header__optionLineOne">Your </span>
          <br></br>
          <span className="header__optionLineTwo">Prime </span>
        </div>
        <div className="header__optionCart">
          <ShoppingCartIcon />
          <span className="header__optionLineTwo header__cartCount">0</span>
        </div>
      </div>
      <nav className="navbar">
        <div className="header__left">
          <div className="header__option">
            <span className="header__optionLineOne">Amazon miniTV</span>
          </div>
          <div className="header__option">
            <span className="header__optionLineOne">Sell</span>
          </div>
          <div className="header__option">
            <span className="header__optionLineOne">Best Sellers</span>
          </div>
          <div className="header__option">
            <span className="header__optionLineOne">Mobiles</span>
          </div>
          <div className="header__option">
            <span className="header__optionLineOne">Today's Deal</span>
          </div>
          <div className="header__option">
            <span className="header__optionLineOne">Customer Service</span>
          </div>
          <div className="header__option">
            <span className="header__optionLineOne">New Releases</span>
          </div>
          <div className="header__option">
            <span className="header__optionLineOne">Electronics</span>
          </div>
          <div className="header__option">
            <div className="header__dropdown">
              <span className="header__optionLineOne">Prime</span>
              <div className="header__dropdownContent">
                <span>Option 1</span>
                <span>Option 2</span>
                <span>Option 3</span>
              </div>
            </div>
          </div>
        </div>

        <div className="header__right">
          <span className="header__optionLineOne">
            Shopping made easy |<a href="#">Download the app</a>
          </span>
        </div>
      </nav>
    </div>
  );
}

export default Header;
