import React from 'react';

import background from '../../images/background.png'

import './Header.css';

function Header() {

  return (
    <header className="header wave__wrapper wave__animation">
      <div className="header__line"></div>
      <div className="header__context">
        <h1 className="header__title">Корректируйте речь и произношение ребёнка, пока занимаетесь своими делами</h1>
        <p className="header__subtitle">Первый в мире сервис для постановки речи, где детки могут заниматься самостоятельно</p>
        <span className="header__label">3-7 лет</span>
        <button className="header__button" type="submit">Получить ранний доступ</button>
        <span classname="header__discription">400₽/мес на всё время пользования приложением 600₽/мес</span>
      </div>
      <img className="header__background" src={background} alt="" />
      <div class="wave__wrapper-inner bgTop">
        <div class="wave wave__top"></div>
      </div>
      <div class="wave__wrapper-inner bgMiddle">
        <div class="wave wave__middle"></div>
      </div>
      <div class="wave__wrapper-inner bgBottom">
        <div class="wave wave__bottom"></div>
      </div>
    </header>
  )
}

export default Header;
