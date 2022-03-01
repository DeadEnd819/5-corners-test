import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import ProductCard from '../product-card/product-card';
import {getData} from '../../store/selectors';

function Products({productsList}) {
  return (
    <div className="products">
      <p className="products__title">Выбранные товары:</p>

      <ul className="products__list">
        {productsList.map((product) => (
          <li className="products__item" key={product.id}>
            <ProductCard {...product} productsList={productsList} />
          </li>
        ))}
      </ul>
    </div>
  );
}

Products.propTypes = {
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

export default connect(mapStateToProps)(Products);
