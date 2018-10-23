import { INIT_CARD_BACKS } from '../actions/cards';

const initialState = {
  cardBacks: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INIT_CARD_BACKS: {
      return { ...state, cardBacks: action.cardBacks };
    }
    default:
      return state;
  }
};

export default reducer;
