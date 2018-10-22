import styled from 'styled-components';
import { BACKGROUND_COLOR } from '../../constants/colors';

import MenuBackground from '../../../../assets/UI/menu_background.png';
import Cursor from '../../../../assets/UI/hand.png';

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  font-family: 'Raleway', sans-serif;
  color: rgb(35, 35, 35);
  font-weight: 0;
  font-size: 3em;
  background-image: url("${MenuBackground}");
  background-repeat: no-repeat;
  background-size: cover;
  background-color: ${BACKGROUND_COLOR};
  cursor: url("${Cursor}"), pointer;
`;
