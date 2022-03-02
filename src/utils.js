import {AmountUpdateType} from './const';

export const extend = (a, b) => Object.assign({}, a, b);

export const getById = (items, id) => items.slice().find((item) => item.id === id);

export const setCurrentValue = (value, min, max, type, callback) => {
  // eslint-disable-next-line no-nested-ternary
  (value < min) ? callback({[type]: min}) :
    (value > max) ? callback({[type]: max}) :
      callback({[type]: value});
};

export const removeItem = (data, item) => [
  ...data.slice(0, data.indexOf(item)),
  ...data.slice(data.indexOf(item) + 1)
];

export const getUpdatedAmount = (data, item, type, value = item.amount) => {
  const ValueByType = {
    [AmountUpdateType.INC]: value + 1 <= 99 ? value + 1 : 99,
    [AmountUpdateType.DEC]: value - 1,
    [AmountUpdateType.ADD]: value,
  };

  const amount = ValueByType[type];
  const price = parseFloat((item.price / item.amount * amount).toFixed(2));

  switch (true) {
    case (type === AmountUpdateType.INC):
      return [
        ...data.slice(0, data.indexOf(item)),
        extend(item, {amount, price}),
        ...data.slice(data.indexOf(item) + 1)
      ];
    case (type === AmountUpdateType.DEC):
      return [
        ...data.slice(0, data.indexOf(item)),
        extend(item, {amount, price}),
        ...data.slice(data.indexOf(item) + 1)
      ];
    case (type === AmountUpdateType.ADD) && (value > 0 && value <= 99):
      return [
        ...data.slice(0, data.indexOf(item)),
        extend(item, {amount, price}),
        ...data.slice(data.indexOf(item) + 1)
      ];
    default:
      return data;
  }
};

export const getCurrentTotal = (data) => data
  .map(({price}) => price)
  .reduce((accumulator, value) => accumulator + value, 0);

export const getCurrentProducts = (array) => {
  const newArray = [];

  for (const item of array) {
    newArray.push({
      id: item.id,
      amount: item.amount
    });
  }

  return newArray;
};
