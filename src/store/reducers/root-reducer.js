import {combineReducers} from 'redux';
import {data} from './data/data';

export const NameSpace = {
  DATA: 'DATA',
};

const {DATA} = NameSpace;

export default combineReducers({
  [DATA]: data,
});
