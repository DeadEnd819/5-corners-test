import React from 'react';
import Breadcrumbs from '../breadcrumbs/breadcrumbs';
import Basket from '../basket/basket';

export default function Main() {
  return (
    <main>
      <div className="container">
        <Breadcrumbs />
        <Basket />
      </div>
    </main>
  );
}
