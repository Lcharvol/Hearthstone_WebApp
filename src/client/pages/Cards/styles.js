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
  transition: top 0.7s ease-in-out, background-color 0.2s ease-in;
`;

export const CardsInner = styled.div`
  position: absolute;
  width: 1000px;
  height: 80vh;
  max-height: 1000px;
  background-color: rgb(25, 25, 25);
`;
