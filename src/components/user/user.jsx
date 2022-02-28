import React from 'react';
import {useMediaQuery} from 'react-responsive';
import PropTypes from 'prop-types';

function User({list, onClick}) {
  const isMobile = useMediaQuery({query: '(max-width: 1023px)'});

  return (
    <div className="user">
      <ul className="user__list">
        {list.map(({href, label, icon, name}) => (
          (name === 'account' && isMobile) ? null :
            <li className="user__item" key={label}>
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

User.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    icon: PropTypes.shape({
      name: PropTypes.string.isRequired,
      width: PropTypes.number.isRequired,
      height: PropTypes.number.isRequired,
    }).isRequired,
  })).isRequired,
  onClick: PropTypes.func,
};

export default User;
