import React from 'react';
import timFerrisImage from '../img/Tim-Ferriss-Quote.webp';

function Header() {
  return (
    <div className="header">
      <div className="header__text-box">
        <h1 className="heading-primary">Tim Ferris Tribute</h1>
        <h2 className="heading-secondary u-italic-text">
          Author of "The Four Hour Work Week
        </h2>
      </div>

      <div className="header__hr-box-1">
        <hr></hr>
      </div>

      <div className="header__image-box">
        <div className="header__image-container">
          <img
            className="header__image "
            src={timFerrisImage}
            alt="Time Ferris Quote"
          />
        </div>
        <figcaption className="header__caption">
          Fig.1 - Time Ferris Quote
        </figcaption>
        <p>Picture of Tim Ferris And A Quote</p>
      </div>

      <div class="header__hr-box-2">
        <hr></hr>
      </div>
    </div>
  );
}

export default Header;
