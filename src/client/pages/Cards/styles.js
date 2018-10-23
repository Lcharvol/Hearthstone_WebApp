import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: white;
  z-index: 100;
  top: ${({ top }) => top}vh;
  transition: top 0.7s ease-in-out;
`;
