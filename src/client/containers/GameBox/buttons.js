import TopButton from '../../../../assets/UI/game_box_top_button.png';
import MiddleButton from '../../../../assets/UI/game_box_middle_button.png';
import BottomButton from '../../../../assets/UI/game_box_bottom_button.png';
import { CARDS, PACK_OPENNER, DECKS } from '../../constants/router';

const buttons = [
  {
    id: 0,
    label: 'Cards',
    location: CARDS,
    UI: TopButton,
    top: 54,
    width: 200,
    height: 35,
    left: 10,
  },
  {
    id: 1,
    label: 'Pack Simulator',
    location: PACK_OPENNER,
    UI: MiddleButton,
    top: 15,
    width: 238,
    height: 35,
    left: 13,
  },
  {
    id: 2,
    label: 'Decks',
    location: DECKS,
    UI: BottomButton,
    top: 18,
    width: 240,
    height: 35,
    left: 10,
    textFixer: -5,
  },
];

export default buttons;
