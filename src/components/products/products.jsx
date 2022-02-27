import React from 'react';
import {connect} from 'react-redux';
import Counter from '../counter/counter';
import {getDate} from '../../store/selectors';

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
        {/*eslint-disable-next-line*/}
        <a className="product-card__delete" href="#">Удалить</a>
      </div>
    </div>
  );
}

function Products({productsList}) {
  return (
    <div className="products">
      <p className="products__title">Выбранные товары:</p>

      <ul className="products__list">
        {productsList.map((product) => {
          return (
            <li className="products__item" key={product.id}>
              <ProductCard {...product} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

const mapStateToProps = (store) => ({
  productsList: getDate(store),
});

export default connect(mapStateToProps)(Products);
