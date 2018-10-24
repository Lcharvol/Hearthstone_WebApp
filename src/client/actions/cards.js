export const ENHANCE_CARDS = 'ENHANCE_CARDS';

export const enhanceCards = props => dispatch =>
  dispatch({ type: ENHANCE_CARDS, ...props });
