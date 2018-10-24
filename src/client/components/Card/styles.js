import styled from 'styled-components';
import Img from 'react-image';

import { CARD_WIDTH, CARD_HEIGHT } from '../../constants/card';

export const Container = styled.div`
  position: absolute;
  top: ${({ top }) => top}px;
  left: ${({ left }) => left}px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${CARD_HEIGHT}px;
  width: ${CARD_WIDTH}px;
  overflow: hidden;
  transition: transform 0.2s ease-in-out, top 0.3s ease-in-out,
    left 0.3s ease-in-out;
`;

export const StyledImg = styled(Img)`
  margin-top: -45px;
  width: 110%;
  &:hover {
    width: 120%;
  }
  transition: width 0.1s ease-in;
`;
