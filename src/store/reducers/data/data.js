import {extend, removeItem} from '../../../utils';
import {ActionType} from '../../../const';

const {LOAD_DATA, CHANGE_DATA, DELETE_ITEM} = ActionType;

const initialState = {
  data: {},
};

const data = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_DATA:
      return extend(state, {
        data: action.payload,
      });
    case CHANGE_DATA:
      return extend(state, {
        data: action.payload,
      });
    case DELETE_ITEM:
      return {
        data: removeItem(state.data, action.payload)
      };
  }

  return state;
};

export {data};
