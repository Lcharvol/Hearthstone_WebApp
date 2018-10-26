import styled from 'styled-components';

import DARK_BACKGROUND from '../../../../assets/UI/dark_background.png';
import PaperBackgroundUI from '../../../../assets/UI/paper_background.jpg';
import { CARD_WIDTH, CARD_HEIGHT } from '../../constants/card';

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
  height:950px;
  @media (max-height: 1200px) {
    height: 650px;
  }
  @media (max-height: 900px) {
    height: 350px;
  }
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 3px;
  -moz-box-shadow: inset 0px 0px 100px 15px rgba(10,10,10,0.3);
  -webkit-box-shadow: inset 0px 0px 100px 15px rgba(10,10,10,0.3);
  -o-box-shadow: inset 0px 0px 100px 15px rgba(10,10,10,0.3);
  box-shadow: inset 0px 0px 100px 15px rgba(10,10,10,0.3);
`;

export const ManaCrystalsContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 75px;
  bottom: -75px;
  left: 75px;
`;

export const CardsContent = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.45) 10%,
      rgba(0, 0, 0, 0.25) 20%,
      rgba(0, 0, 0, 0) 50%,
      rgba(0, 0, 0, 0.25) 80%,
      rgba(0, 0, 0, 0.45) 90%
    ),
    linear-gradient(
      to left,
      rgba(0, 0, 0, 0.45) 10%,
      rgba(0, 0, 0, 0.25) 20%,
      rgba(0, 0, 0, 0) 50%,
      rgba(0, 0, 0, 0.25) 80%,
      rgba(0, 0, 0, 0.45) 90%
    );
`;

export const CardsNavigation = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  width: ${({ lineSize }) => lineSize * CARD_WIDTH}px;
  height: ${({ columnSize }) => columnSize * CARD_HEIGHT}px;
`;

export const ClassIcons = styled.div`
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  width: calc(100% - 75px);
  height: 75px;
  top: -75px;
  @media (max-width: 600px) {
    height: 100px;
    top: -100px;
  }
  padding-left: 75px;
`;

export const PaperBackground = styled.div`
  position:absolute;
  display:flex;
  justify-content: center;
  align-items: center;
  top:0;
  bottom:0;
  left:0;
  right:0;
  background-image: url("${PaperBackgroundUI}");
  background-size:cover;
  background-repeat:no-repeat;
  opacity:0.6;
`;
