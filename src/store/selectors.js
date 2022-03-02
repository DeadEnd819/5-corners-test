import {getCurrentProducts} from '../utils';

export const getData = (state) => state.DATA.data;
export const getTotalAmount = (state) => state.DATA.data.length;
export const getCoords = (state) => state.MAP.coords;
export const getMarkerFlag = (state) => state.MAP.isMarkerShown;
export const getForm = (state) => state.FORM;
export const getIdAndAmount = (state) => getCurrentProducts(state.DATA.data);
