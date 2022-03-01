import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import MediaQuery from 'react-responsive';
import Form from '../form/form';
import Map from '../map/map';
import {getData} from '../../store/selectors';

function Basket({productsList}) {
  const isEmpty = !productsList.length;

  return (
    <section className="basket">
      <div className="basket__grid">
        <div className="basket__col">

          <h1 className="basket__title">Корзина</h1>

          <div className="basket__wrapper">
            <p className="basket__text">Есть аккаунт?</p>
            {/*eslint-disable-next-line*/}
            <a className="basket__link" href="#" aria-label="Перейти к странице авторизации">Войти</a>
          </div>

          {isEmpty && <p className="basket__empty">Пусто</p>}
          {!isEmpty && <Form />}

        </div>

        {!isEmpty &&
          <MediaQuery minWidth={1024}>
            <div className="basket__col">
              <Map/>
            </div>
          </MediaQuery>
        }
      </div>
    </section>
  );
}

Basket.propTypes = {
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

export default connect(mapStateToProps)(Basket);
