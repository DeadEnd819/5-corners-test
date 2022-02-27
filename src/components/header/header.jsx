import React, {useEffect, useState} from 'react';
import MediaQuery, {useMediaQuery} from 'react-responsive';

const userListMobile = [
  {
    name: 'menu',
    href: '#',
    label: 'Открыть меню',
    icon: {
      name: 'menu',
      width: 25,
      height: 25,
    },
  },
  {
    name: 'search',
    href: '#',
    label: 'Открыть поиск',
    icon: {
      name: 'search',
      width: 25,
      height: 25,
    },
  },
];

const userList = [
  {
    name: 'account',
    href: '#',
    label: 'Кабинет',
    icon: {
      name: 'profile',
      width: 25,
      height: 25,
    },
  },
  {
    name: 'favorites',
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
    label: 'basket',
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

function User({list, onClick}) {
  const isMobile = useMediaQuery({query: '(max-width: 1023px)'});

  return (
    <div className="user">
      <ul className="user__list">
        {list.map(({href, label, icon, name}) => (
          (name === 'account' && isMobile) ? null :
            <li className="user__item" key={label}>
              {/*eslint-disable-next-line*/}
              <a
                className="user__link"
                href={href}
                aria-label={label}
                onClick={onClick}
                data-name={name}
              >
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

function MainNav({style}) {
  return (
    <nav className={`main-nav ${style ? style : ''}`}>

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

      <MediaQuery maxWidth={1023}>
        <a href="#" aria-label="Войти в аккаунт" style={{marginTop: '50px'}}>Войти в аккаунт</a>
      </MediaQuery>
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
  const [isMenuOpen, setMenuOpen] = useState(false);
  const isMobile = useMediaQuery({query: '(max-width: 1023px)'});

  useEffect(() => {
    if (!isMobile) {
      setMenuOpen(false);
    }
  }, [isMobile]);

  const handleUserLinkClick = ({target}) => {
    const name = target.dataset.name;

    if (name === 'menu') {
      setMenuOpen(!isMenuOpen);
    }
  };

  return (
    <header className="header">
      <div className="container header__grid">
        <Logo />
        <div className="header__wrapper">
          <MediaQuery maxWidth={1023}>
            <User list={userListMobile} onClick={handleUserLinkClick} />
          </MediaQuery>

          <Search />
          <User list={userList} />

        </div>

        <MainNav
          style={(isMobile && isMenuOpen) && 'is-visible'}
        />

      </div>
    </header>
  );
}

export default Header;
