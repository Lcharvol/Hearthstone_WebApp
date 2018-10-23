import { MODIFY_LOCATION } from '../actions/app';

const initialState = {
  isFetching: false,
  location: 'home',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case MODIFY_LOCATION: {
      return { ...state, location: action.newLocation };
    }
    default:
      return state;
  }
};

export default reducer;
