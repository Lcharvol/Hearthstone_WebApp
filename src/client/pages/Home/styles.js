import styled, { injectGlobal } from 'styled-components';
import { BACKGROUND_COLOR } from '../../constants/colors';

import MenuBackground from '../../../../assets/UI/menu_background.png';
import Cursor from '../../../../assets/UI/hand.png';
import CursorDown from '../../../../assets/UI/hand_down.png';

injectGlobal`
  @font-face {
    font-family: 'Belweb';
    src: url('../../../../assets/Font/Belweb.ttf');
    font-weight: normal;
    font-style: normal;
  }
`;

export const Container = styled.div`
  position: relative;
  font-family: 'Belweb', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  color: rgb(35, 35, 35);
  font-weight: 0;
  font-size: 3em;
  background-image: url("${MenuBackground}");
  background-repeat: no-repeat;
  background-size: cover;
  background-color: ${BACKGROUND_COLOR};
  cursor: url("${Cursor}"), pointer;
  &:active {
    cursor: url("${CursorDown}"), pointer;
}
`;
