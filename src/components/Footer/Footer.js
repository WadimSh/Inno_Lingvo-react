import React from 'react';

import './Footer.css';

function Footer() {

  return (
    <footer className="footer">
      <div className="footer__container">
        <a className="footer__social" href="#"></a>
        <a className="footer__social" href="#"></a>
        <a className="footer__social" href="#"></a>
      </div>
      <div className="footer__container">
        <span className="footer__text">&copy; Inno Lingvo, 2019-{new Date().getFullYear()}</span>
        <a className="footer__text footer__link" href="#">Политика конфиденциальности</a>
      </div>
      <div className="footer__container">
        <span className="footer__text">Москва, Болотниковская ул. 31</span>
        <a className="footer__text footer__email" href="mailto: il@innolingvo.ru">il@innolingvo.ru</a>
      </div>
    </footer>
  )
}

export default Footer;
