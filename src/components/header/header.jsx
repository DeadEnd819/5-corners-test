import React from 'react';

function Header () {
  return (
    <header className="header">
      <div className="container header__grid"><span className="header__logo"><img src="img/logo.svg" width="160" height="50" alt="Лого" /></span>
        <div className="header__wrapper">
          <div className="search">
            <form action="#">
              <button className="search__button button">
                <svg width="25" height="25" aria-hidden="true">
                  <use xlinkHref="#icon-search" />
                </svg>
              </button>
              <div className="input">
                <input type="text" id="search" name="search" />
                <label htmlFor="search"><span className="input__label">Поиск</span>
                </label>
              </div>
            </form>
          </div>
          <div className="user">
            <ul className="user__list">
              <li className="user__item">
                {/*eslint-disable-next-line*/}
                <a className="user__link" href="#" aria-label="Кабинет">
                  <svg width="22" height="22" aria-hidden="true">
                    <use xlinkHref="#icon-profile" />
                  </svg>
                </a>
              </li>
              <li className="user__item">
                {/*eslint-disable-next-line*/}
                <a className="user__link" href="#" aria-label="Избранное">
                  <svg width="22" height="22" aria-hidden="true">
                    <use xlinkHref="#icon-heart" />
                  </svg>
                </a>
              </li>
              <li className="user__item">
                {/*eslint-disable-next-line*/}
                <a className="user__link" href="#" aria-label="Корзина">
                  <svg width="22" height="22" aria-hidden="true">
                    <use xlinkHref="#icon-basket" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <nav className="main-nav">
          <button
            className="main-nav__toggle btn-reset"
            type="button"
            aria-label="Переключатель отображения меню"
            aria-pressed="false"
          >
            <svg width="20" height="20" aria-hidden="true">
              <use xlinkHref="#icon-burger" />
            </svg>
          </button>
          <div className="main-nav__wrapper">
            <ul className="main-nav__list">
              <li className="main-nav__item">
                {/*eslint-disable-next-line*/}
                <a className="main-nav__link" href="#">Страница 1</a>
              </li>
              <li className="main-nav__item">
                {/*eslint-disable-next-line*/}
                <a className="main-nav__link" href="#">Страница 2</a>
              </li>
              <li className="main-nav__item">
                {/*eslint-disable-next-line*/}
                <a className="main-nav__link" href="#">Страница 3</a>
              </li>
              <li className="main-nav__item">
                {/*eslint-disable-next-line*/}
                <a className="main-nav__link" href="#">Страница 4</a>
              </li>
              <li className="main-nav__item">
                {/*eslint-disable-next-line*/}
                <a className="main-nav__link" href="#">Страница 5</a>
              </li>
              <li className="main-nav__item">
                {/*eslint-disable-next-line*/}
                <a className="main-nav__link" href="#">Страница 6</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
