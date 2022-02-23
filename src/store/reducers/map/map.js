import {extend} from '../../../utils';
import {ActionType} from '../../../const';

const {LOAD_COORDS, CHANGE_MARKER_FLAG} = ActionType;

const initialState = {
  coords: {
    lat: null,
    lng: null
  },
  isMarkerShown: false,
};

const map = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_COORDS:
      return extend(state, {
        coords: action.payload,
        isMarkerShown: true,
      });
    case CHANGE_MARKER_FLAG:
      return extend(state, {
        isMarkerShown: action.payload,
      });
  }

  return state;
};

export {map};
