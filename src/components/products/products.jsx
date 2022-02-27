import React from 'react';
import {connect} from 'react-redux';
import {getDate} from '../../store/selectors';

const DATA_MOCK = [
  {
    id: '901',
    name: 'Товар 1',
    type: 'Описание товара, которое может быть длинным',
    img: 'https://via.placeholder.com/150',
    price: 1090,
    amount: 1
  },
  {
    id: '902',
    name: 'Товар 2',
    type: 'Описание товара, которое может быть очень-очень длинным',
    img: 'https://via.placeholder.com/150',
    price: 700,
    amount: 1
  },
  {
    id: '903',
    name: 'Товар 3',
    type: 'Короткое описание товара',
    img: 'https://via.placeholder.com/150',
    price: 1000,
    amount: 2
  },
];

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
