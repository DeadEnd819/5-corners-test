import {ActionType} from '../const';

const {
  LOAD_DATA,
  LOAD_COORDS,
  CLEAR_FORM_DATA,
  CHANGE_FORM_DATA,
  CHANGE_MARKER_FLAG
} = ActionType;

export const setData = (date) => ({
  type: LOAD_DATA,
  payload: date,
});

export const changeFormData = (data) => ({
  type: CHANGE_FORM_DATA,
  payload: data,
});

export const clearFormData = (coords) => ({
  type: CLEAR_FORM_DATA,
});

export const setCoords = (coords) => ({
  type: LOAD_COORDS,
  payload: coords,
});

export const changeMarkerFlag = (flag) => ({
  type: CHANGE_MARKER_FLAG,
  payload: flag,
});
