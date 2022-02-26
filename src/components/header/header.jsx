import React from 'react';

const userList = [
  {
    href: '#',
    label: 'Кабинет',
    icon: {
      name: 'profile',
      width: 25,
      height: 25,
    },
  },
  {
    href: '#',
    label: 'Избранное',
    icon: {
      name: 'heart',
      width: 25,
      height: 25,
    },
  },
  {
    href: '#',
    label: 'Корзина',
    icon: {
      name: 'basket',
      width: 25,
      height: 25,
    },
  },
];

const navList = [
  {
    href: '#',
    name: 'Страница 1',
  },
  {
    href: '#',
    name: 'Страница 2',
  },
  {
    href: '#',
    name: 'Страница 3',
  },
  {
    href: '#',
    name: 'Страница 4',
  },
  {
    href: '#',
    name: 'Страница 5',
  },
  {
    href: '#',
    name: 'Страница 6',
  },
];

function Search() {
  return (
    <div className="search">
      <form action="#">

        <button className="search__button button">
          <svg width="25" height="25" aria-hidden="true">
            <use xlinkHref="#icon-search" />
          </svg>
        </button>

        <div className="search__input">
          <input type="text" id="search" name="search" placeholder="Поиск" />
          <label className="visually-hidden" htmlFor="search">Поиск товара</label>
        </div>

      </form>
    </div>
  );
}

function User() {
  return (
    <div className="user">
      <ul className="user__list">
        {userList.map(({href, label, icon}) => (
          <li className="user__item" key={label}>
            {/*eslint-disable-next-line*/}
            <a className="user__link" href={href} aria-label={label}>
              <svg width={icon.width} height={icon.height} aria-hidden="true">
                <use xlinkHref={`#icon-${icon.name}`} />
              </svg>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function MainNav() {
  return (
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
          {navList.map(({href, name}) => (
            <li className="main-nav__item" key={name}>
              {/*eslint-disable-next-line*/}
              <a className="main-nav__link" href={href}>{name}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

function Logo () {
  return (
    <span className="logo">
      <img src="img/logo.svg" width="160" height="50" alt="Лого" />
    </span>
  );
}

function Header () {
  return (
    <header className="header">
      <div className="container header__grid">
        <Logo />
        <div className="header__wrapper">

          <Search />
          <User />

        </div>

        <MainNav />

      </div>
    </header>
  );
}

export default Header;
