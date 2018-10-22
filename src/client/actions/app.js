export const CHANGE_IS_FETCHING = 'CHANGE_IS_FETCHING';

export const changeIsFetching = () => dispatch =>
  dispatch({ type: CHANGE_IS_FETCHING, message });
