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
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 1000px;
  min-height: 550px;
  max-height: 90vh;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 3px;
  overflow: hidden;
`;

export const CardsHeader = styled.div`
  position: relative;
  justify-content: flex-start;
  align-items: center;
  display: flex;
  width: calc(100% - 150px);
  min-height: 75px;
  padding-left: 75px;
  padding-right: 75px;
`;

export const CardsNavigation = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 100%;
  height: 800px;
  overflow: hidden;
`;
