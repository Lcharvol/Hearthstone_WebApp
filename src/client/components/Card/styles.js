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
  position: relative;
  margin-top: -15px;
  width: 110%;
  background-size: 100%;
  transition: all 0.1s ease-in;
  margin-top: -40px;
  &:hover {
    width: 112%;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: calc(83%);
  width: 85%;
  overflow: hidden;
  border-radius: 10px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
  transition: background-color 0.2s ease-in-out;
`;
