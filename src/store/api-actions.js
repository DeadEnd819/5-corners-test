import {setData} from './action';

export const fetchData = () => (dispatch, _getState, api) => (
  api.get()
    .then(({data}) => {dispatch(setData(JSON.parse(data)));})
    .catch(() => {
      throw Error('Ошибка загрузки данных');
    })
);
