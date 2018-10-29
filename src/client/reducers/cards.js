import { ENHANCE_CARDS } from '../actions/cards';

const initialState = {
  cardBacks: [],
  deathKnightCards: [],
  druidCards: [],
  hunterCards: [],
  mageCards: [],
  paladinCards: [],
  priestCards: [],
  rogueCards: [],
  shamanCards: [],
  warlockCards: [],
  warriorCards: [],
  neutralCards: [],
};

const reducer = (state = initialState, action) => {
  const { type, ...rest } = action;
  switch (type) {
    case ENHANCE_CARDS: {
      return { ...state, ...rest };
    }
    default:
      return state;
  }
};

export default reducer;
