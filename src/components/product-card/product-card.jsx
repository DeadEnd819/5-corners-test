import React from 'react';
import PropTypes from 'prop-types';
import Counter from '../counter/counter';

function ProductCard({amount, img, name, price, type}) {
  return (
    <div className="product-card">
      <div className="product-card__img">
        <img src={img} width="150" height="150" alt="Фото товара"/>
      </div>

      <div className="product-card__info">
        <p className="product-card__name">{name}</p>
        <p className="product-card__description">{type}</p>

        <Counter value={amount} />
      </div>

      <div className="product-card__wrapper">
        <p className="product-card__price">{price} руб.</p>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a className="product-card__delete" href="#">Удалить</a>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  amount: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
};

export default ProductCard;
