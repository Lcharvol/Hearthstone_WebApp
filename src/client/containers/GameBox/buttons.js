import TopButton from '../../../../assets/UI/game_box_top_button.png';
import MiddleButton from '../../../../assets/UI/game_box_middle_button.png';
import BottomButton from '../../../../assets/UI/game_box_bottom_button.png';

const buttons = [
  {
    id: 0,
    label: 'Cards',
    UI: TopButton,
    top: 54,
    width: 200,
    height: 35,
    left: 10,
  },
  {
    id: 1,
    label: 'Pack Simulator',
    UI: MiddleButton,
    top: 15,
    width: 238,
    height: 35,
    left: 13,
  },
  {
    id: 2,
    label: 'Decks',
    UI: BottomButton,
    top: 18,
    width: 240,
    height: 35,
    left: 10,
  },
];

export default buttons;
