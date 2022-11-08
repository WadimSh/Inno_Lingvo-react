import React from 'react';

import './Banner.css';

function Banner({ onBanner, onTitle, onSubtitle }) {
 
  return (
    <section className={onBanner ? `banner gradient` : `banner img`}>
      <div className="banner__img"></div>
      <div className="banner__context">
        <h3 className="banner__title">{onTitle}</h3>
        <div className="banner__wrapper">
          <button className="banner__button">Записаться</button>
          <p className="banner__subtitle">{onSubtitle}</p>
        </div>
      </div>
    </section>
  )
}

export default Banner;