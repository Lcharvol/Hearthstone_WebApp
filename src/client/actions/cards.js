export const LOAD_CARD_BACKS = 'LOAD_CARD_BACKS';

export const loadCardBacks = cardBacks => dispatch =>
  dispatch({ type: LOAD_CARD_BACKS, cardBacks });
