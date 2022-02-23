import {changeFormData, setCoords, setData} from './action';
import {BACKEND_URL, GOOGLE_URL, KEY} from '../const';

export const fetchData = () => (dispatch, _getState, api) => (
  api.get(BACKEND_URL)
    .then(({data}) => {
      dispatch(setData(JSON.parse(data)));
    })
    .catch(() => {
      throw Error('Ошибка загрузки данных');
    })
);

export const fetchCoords = (address) => (dispatch, _getState, api) => (
  api.get(`${GOOGLE_URL}/json?address=${address}&key=${KEY}`)
    .then(({data}) => {
      dispatch(setCoords(data.results[0].geometry.location));
    })
    .catch(() => {
      throw Error('Ошибка загрузки координат карты');
    })
);

export const fetchAddress = ({lat, lng}) => (dispatch, _getState, api) => (
  api.get(`${GOOGLE_URL}/json?latlng=${lat},${lng}&key=${KEY}`)
    .then(({data}) => {
      dispatch(
        changeFormData({
          address: data.results[0].formatted_address
        })
      );
    })
    .catch(() => {
      throw Error('Ошибка загрузки адреса');
    })
);
