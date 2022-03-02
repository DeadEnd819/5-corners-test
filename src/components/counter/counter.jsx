import React from 'react';
import PropTypes from 'prop-types';
import {AmountUpdateType} from '../../const';

function Counter({value, onChange}) {
  return (
    <div className="counter">
      <button
        type="button"
        className="counter__button counter__button--side-left"
        data-name={AmountUpdateType.DEC}
        onClick={onChange}
      >
        <svg width="16" height="16">
          <use xlinkHref="#icon-minus" />
        </svg>
      </button>

      <label className="visually-hidden" htmlFor="counter-1">Счетчик товара</label>
      <input
        id="counter-1"
        type="number"
        value={value}
        onChange={onChange}
        data-name={AmountUpdateType.ADD}
      />

      <button
        type="button"
        className="counter__button counter__button--side-right"
        data-name={AmountUpdateType.INC}
        onClick={onChange}
      >
        <svg width="16" height="16">
          <use xlinkHref="#icon-plus" />
        </svg>
      </button>
    </div>
  );
}

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Counter;
