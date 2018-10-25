import styled from 'styled-components';

import DARK_BACKGROUND from '../../../../assets/UI/dark_background.png';

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
  justify-content: center;
  background-image: url("${DARK_BACKGROUND}");
  background-size:cover;
  background-repeat:no-repeat;
  align-items: center;
  width: 1000px;
  height:800px
  max-height: 90vh;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 3px;
  -moz-box-shadow: inset 0px 0px 100px 15px rgba(10,10,10,0.3);
  -webkit-box-shadow: inset 0px 0px 100px 15px rgba(10,10,10,0.3);
  -o-box-shadow: inset 0px 0px 100px 15px rgba(10,10,10,0.3);
  box-shadow: inset 0px 0px 100px 15px rgba(10,10,10,0.3);
`;

export const CardsHeader = styled.div`
  position: relative;
  justify-content: flex-start;
  align-items: flex-start;
  display: flex;
  width: calc(100% - 150px);
  min-height: 150px;
  padding-left: 110px;
  padding-right: 75px;
  margin-top: 25px;
`;

export const CardsContent = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 800px;
  overflow: hidden;
`;

export const CardsNavigation = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
`;
