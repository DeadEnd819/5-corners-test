import React from 'react';
import PropTypes from 'prop-types';
import MediaQuery from 'react-responsive';
import {navList} from '../../const';

function MainNav({style}) {
  return (
    <nav className={`main-nav ${style ? style : ''}`}>

      <div className="main-nav__wrapper">
        <ul className="main-nav__list">
          {navList.map(({href, name}) => (
            <li className="main-nav__item" key={name}>
              <a className="main-nav__link" href={href}>{name}</a>
            </li>
          ))}
        </ul>
      </div>

      <MediaQuery maxWidth={1023}>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a href="#" aria-label="Войти в аккаунт" style={{marginTop: '50px'}}>Войти в аккаунт</a>
      </MediaQuery>
    </nav>
  );
}

MainNav.propTypes = {
  style: PropTypes.bool.isRequired,
};

export default MainNav;
