import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {useMediaQuery} from 'react-responsive';
import {getTotalAmount} from '../../store/selectors';

function User({list, onClick, totalAmount}) {
  const isMobile = useMediaQuery({query: '(max-width: 1023px)'});

  return (
    <div className="user">
      <ul className="user__list">
        {list.map(({href, label, icon, name, hasBasketCounter}) => {
          const isShowCounter = hasBasketCounter && Boolean(totalAmount);

          return (
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
                    <use xlinkHref={`#icon-${icon.name}`}/>
                  </svg>
                </a>
                {isShowCounter && <span className="user__counter">{totalAmount}</span>}
              </li>
          );
        })}
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
    hasBasketCounter: PropTypes.bool,
  })).isRequired,
  onClick: PropTypes.func,
  totalAmount: PropTypes.number
};

const mapStateToProps = (store) => ({
  totalAmount: getTotalAmount(store),
});

export default connect(mapStateToProps)(User);
