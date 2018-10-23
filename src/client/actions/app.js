export const CHANGE_IS_FETCHING = 'CHANGE_IS_FETCHING';

export const MODIFY_LOCATION = 'MODIFY_LOCATION';

export const changeIsFetching = () => dispatch =>
  dispatch({ type: CHANGE_IS_FETCHING, message });

export const modifyLocation = newLocation => dispatch =>
  dispatch({ type: MODIFY_LOCATION, newLocation });
