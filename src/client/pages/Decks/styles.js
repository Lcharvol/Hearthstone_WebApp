import styled from 'styled-components';
import DecksContentUI from '../../../../assets/UI/decks_background.png';

export const Container = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  z-index: 100;
  top: ${({ top }) => top}vh;
  transition: top 0.7s ease-in-out;
`;

export const DecksInner = styled.div`
    position:relative;
    background-image: url("${DecksContentUI}");
    width:920px;
    height:670px;
    background-repeat:no-repeat;
    background-size:cover;
`;
