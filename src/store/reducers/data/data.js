import {extend} from '../../../utils';
import {ActionType} from '../../../const';

const {LOAD_DATA, CHANGE_DATA} = ActionType;

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
  }

  return state;
};

export {data};
