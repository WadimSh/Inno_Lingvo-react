import React from 'react';

import './Header.css';

function Header() {

  return (
    <header className="header wave__wrapper wave__animation">
      <div className="header__line"></div>

      
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
