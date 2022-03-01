import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Counter from '../counter/counter';
import {getById, getUpdatedAmount} from '../../utils';
import {changeData, removeItem} from '../../store/action';
import {AmountUpdateType} from '../../const';

function ProductCard({id, amount, img, name, price, type, productsList, updateData, deleteItem}) {
  const currentItem = getById(productsList, id);

  useEffect(() => {
    if (!amount) {
      deleteItem(currentItem);
    }
  }, [amount]);

  const handleAmountChange = (evt) => {
    const nameEvt = evt.target.dataset.name;
    let value;
    let updList;

    if (nameEvt === AmountUpdateType.ADD) {
      value = parseInt(evt.target.value, 10);
      updList = getUpdatedAmount(productsList, currentItem, AmountUpdateType[nameEvt], value);
      updateData(updList);
      return;
    }

    updList = getUpdatedAmount(productsList, currentItem, AmountUpdateType[nameEvt]);
    updateData(updList);
  };

  const handleDeleteClick = (evt) => {
    evt.preventDefault();
    deleteItem(currentItem);
  };

  return (
    <div className="product-card">
      <div className="product-card__img">
        <img src={img} width="150" height="150" alt="Фото товара"/>
      </div>

      <div className="product-card__info">
        <p className="product-card__name">{name}</p>
        <p className="product-card__description">{type}</p>

        <Counter value={amount} onChange={handleAmountChange} />
      </div>

      <div className="product-card__wrapper">
        <p className="product-card__price">{price} руб.</p>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a className="product-card__delete" href="#" onClick={handleDeleteClick}>Удалить</a>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  id: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  updateData: PropTypes.func.isRequired,
  productsList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
  })).isRequired,
  deleteItem: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  updateData(data) {
    dispatch(changeData(data));
  },
  deleteItem(item) {
    dispatch(removeItem(item));
  }
});

export default connect(null, mapDispatchToProps)(ProductCard);
