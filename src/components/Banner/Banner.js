import React from 'react';

import './Banner.css';

function Banner({ onBanner, onTitle, onSubtitle }) {
 
  return (
    <section className={onBanner ? `banner gradient` : `banner img`}>
      <div className="banner__img"></div>
      <div className="banner__context">
        <h3 className="banner__title">{onTitle}</h3>
        <p className="banner__subtitle">{onSubtitle}</p>
        <button className="banner__button">Записаться</button>
      </div>
    </section>
  )
}

export default Banner;