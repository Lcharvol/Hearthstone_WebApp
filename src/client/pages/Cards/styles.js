import styled from 'styled-components';

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
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 1000px;
  height: 850px;
  max-height: 1000px;
  background-color: rgba(15, 15, 15, 0.7);
  border-radius: 3px;
  overflow: hidden;
`;

export const CardsHeader = styled.div`
  position: relative;
  justify-content: flex-start;
  align-items: center;
  display: flex;
  width: calc(100% - 150px);
  height: 15%;
  padding-left: 75px;
  padding-right: 75px;
`;

export const CardsNavigation = styled.div`
  position:relative;
  display:flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap:wrap;
  width:100%
  height:85%;
  overflow:hidden;
  overflow-y:scroll;
`;
