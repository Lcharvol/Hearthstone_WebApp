export const INIT_CARD_BACKS = 'INIT_CARD_BACKS';

export const initCardBacks = cardBacks => dispatch =>
  dispatch({ type: INIT_CARD_BACKS, cardBacks });
