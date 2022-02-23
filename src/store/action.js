import {ActionType} from '../const';

const {LOAD_DATA} = ActionType;

export const setData = (date) => ({
  type: LOAD_DATA,
  payload: date,
});
