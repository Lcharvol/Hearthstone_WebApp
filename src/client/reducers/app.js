import {
  MODIFY_LOCATION,
  HANDLE_DISPLAY_SOCIAL_MENU,
  LOAD_INFO,
} from '../actions/app';

const initialState = {
  isFetching: false,
  location: 'home',
  displaySocialMenu: false,
  info: {},
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
    case LOAD_INFO: {
      return { ...state, info: action.info };
    }
    default:
      return state;
  }
};

export default reducer;
