import Form from '../form/form';

function Basket() {
  return (
    <section className="basket">
      <div className="basket__grid">
        <div className="basket__col">

          <h1 className="basket__title">Корзина</h1>

          <div className="basket__wrapper">
            <p className="basket__text">Есть аккаунт?</p>
            <a className="basket__link" href="#" aria-label="Перейти к странице авторизации">Войти</a>
          </div>

          <Form />
        </div>
        <div className="basket__col">

        </div>
      </div>
    </section>
  );
}

export default Basket;
