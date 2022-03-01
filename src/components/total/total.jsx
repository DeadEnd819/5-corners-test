import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getData} from '../../store/selectors';
import {getCurrentTotal} from '../../utils';

function Total({value, productsList}) {
  const currentValue = getCurrentTotal(productsList);

  return (
    <div className="total">
      <span>Итог:</span>
      <span>{currentValue} руб.</span>
    </div>
  );
}

Total.propTypes = {
  value: PropTypes.number.isRequired,
  productsList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
  })).isRequired,
};

const mapStateToProps = (store) => ({
  productsList: getData(store),
});

export default connect(mapStateToProps)(Total);
