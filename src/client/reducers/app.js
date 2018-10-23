import { MODIFY_LOCATION, HANDLE_DISPLAY_SOCIAL_MENU } from '../actions/app';

const initialState = {
  isFetching: false,
  location: 'home',
  displaySocialMenu: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case HANDLE_DISPLAY_SOCIAL_MENU: {
      return { ...state, displaySocialMenu: !state.displaySocialMenu };
    }
    case MODIFY_LOCATION: {
      return {
        ...state,
        location: action.newLocation,
        displaySocialMenu: false,
      };
    }
    default:
      return state;
  }
};

export default reducer;
