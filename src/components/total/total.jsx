import React from 'react';

function Total({value}) {
  return (
    <div className="total">
      <span>Итог:</span>
      <span>{value} руб.</span>
    </div>
  );
}

export default Total;
