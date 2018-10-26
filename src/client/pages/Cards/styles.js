import styled from 'styled-components';

import DARK_BACKGROUND from '../../../../assets/UI/dark_background.png';
import { CARD_WIDTH } from '../../constants/card';

export const Container = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  z-index: 300;
  top: ${({ top }) => top}vh;
  transition: top 0.4s ease-in-out, background-color 0.2s ease-in;
`;

export const CardsInner = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-image: url("${DARK_BACKGROUND}");
  background-size:cover;
  background-repeat:no-repeat;
  width: 1200px;
  @media (max-width: 1200px) {
    width: 1000px;
  }
  @media (max-width: 1000px) {
    width: 800px;
  }
  @media (max-width: 800px) {
    width: 600px;
  }
  @media (max-width: 600px) {
    width: 400px;
  }
  height:1100px;
  @media (max-height: 1200px) {
    height: 800px;
  }
  @media (max-height: 900px) {
    height: 500px;
  }
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 3px;
  -moz-box-shadow: inset 0px 0px 100px 15px rgba(10,10,10,0.3);
  -webkit-box-shadow: inset 0px 0px 100px 15px rgba(10,10,10,0.3);
  -o-box-shadow: inset 0px 0px 100px 15px rgba(10,10,10,0.3);
  box-shadow: inset 0px 0px 100px 15px rgba(10,10,10,0.3);
`;

export const CardsHeader = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  width: calc(100% - 185px);
  min-height: 150px;
  max-height: 150px;
  padding-left: 110px;
  padding-right: 75px;
  margin-top: 25px;
`;

export const CardsContent = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const CardsNavigation = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  width: ${({ lineSize }) => lineSize * CARD_WIDTH}px;
  height: 100%;
`;

export const ClassIcons = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;
