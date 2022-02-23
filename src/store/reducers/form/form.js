import {extend} from '../../../utils';
import {ActionType} from '../../../const';

const {CHANGE_FORM_DATA, CLEAR_FORM_DATA} = ActionType;

const initialState = {
  address: '',
  name: '',
  phone: '',
  email: '',
  package: '',
  comment: ''
};

const form = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_FORM_DATA:
      return extend(state, action.payload);
    case CLEAR_FORM_DATA:
      return initialState;
  }

  return state;
};

export {form};
