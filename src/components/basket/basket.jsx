import React from 'react';
import Form from '../form/form';
import Map from '../map/map';

function Basket() {
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

          <Form />
        </div>
        <div className="basket__col">
          <Map />
        </div>
      </div>
    </section>
  );
}

export default Basket;
