export const CHANGE_IS_FETCHING = 'CHANGE_IS_FETCHING';

export const MODIFY_LOCATION = 'MODIFY_LOCATION';

export const HANDLE_DISPLAY_SOCIAL_MENU = 'HANDLE_DISPLAY_SOCIAL_MENU';

export const LOAD_INFO = 'LOAD_INFO';

export const changeIsFetching = () => dispatch =>
  dispatch({ type: CHANGE_IS_FETCHING, message });

export const modifyLocation = newLocation => dispatch =>
  dispatch({ type: MODIFY_LOCATION, newLocation });

export const handleDisplaySocialMenu = () => dispatch =>
  dispatch({ type: HANDLE_DISPLAY_SOCIAL_MENU });

export const initInfo = info => dispatch => dispatch({ type: LOAD_INFO, info });
