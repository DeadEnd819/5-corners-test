import React from 'react';
import PropTypes from 'prop-types';

function Counter({value}) {
  return (
    <div className="counter">
      <button className="counter__button counter__button--side-left">
        <svg width="16" height="16">
          <use xlinkHref="#icon-minus" />
        </svg>
      </button>

      <label className="visually-hidden" htmlFor="counter-1">Счетчик товара</label>
      <input id="counter-1" type="number" value={value} />

      <button className="counter__button counter__button--side-right">
        <svg width="16" height="16">
          <use xlinkHref="#icon-plus" />
        </svg>
      </button>
    </div>
  );
}

Counter.propTypes = {
  value: PropTypes.number.isRequired,
};

export default Counter;
