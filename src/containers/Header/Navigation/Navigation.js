import React from 'react';
import logo from "assets/images/main-logo.svg";
import search from "assets/images/search.svg";
import profile from "assets/images/profile.svg";
import heart from "assets/images/heart.svg";

const LIST = [
  {id: '1', img: `${search}`},
  {id: '2', img: `${profile}`},
  {id: '3', img: `${heart}`},
]

const Navigation = () => {
  return (
    <div className="header__menu-navigation">
      <div className="header__menu-list">
        <div><img alt="logo" src={logo} /></div>
        <ul>
          <li><a href="/">Продукты</a></li>
          <li><a href="/">Цвета</a></li>
          <li><a href="/">Вдохновение</a></li>
          <li><a href="/">Советы</a></li>
          <li><a href="/">Найти магазин</a></li>
        </ul>
      </div>

      <div className="header__contact-list">
        <div>
          <p>+7 (495) 221-77-69</p>
          <a href="/">Заказать звонок</a>
        </div>
        <div className="header__contact-links">
          {LIST.map(item => {
            return (
              <a key={item.id} href='/'><img alt={item.id} src={item.img} /></a>
            )
          })}
          <div className="header__circle"><a className="header__contact-amount" href="/">4</a></div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;