import React from 'react';
import PropTypes from 'prop-types';

function Total({value}) {
  return (
    <div className="total">
      <span>Итог:</span>
      <span>{value} руб.</span>
    </div>
  );
}

Total.propTypes = {
  value: PropTypes.number.isRequired,
};

export default Total;
