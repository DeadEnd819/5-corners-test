import {combineReducers} from 'redux';
import {data} from './data/data';
import {map} from './map/map';
import {form} from './form/form';

export const NameSpace = {
  DATA: 'DATA',
  MAP: 'MAP',
  FORM: 'FORM',
};

const {DATA, MAP, FORM} = NameSpace;

export default combineReducers({
  [DATA]: data,
  [MAP]: map,
  [FORM]: form,
});
