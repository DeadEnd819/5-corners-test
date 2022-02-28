import React, {useEffect, useState} from 'react';
import MediaQuery, {useMediaQuery} from 'react-responsive';
import Search from '../search/search';
import User from '../user/user';
import MainNav from '../main-nav/main-nav';
import Logo from '../logo/logo';
import {userListMobile, userList} from '../../const';

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
