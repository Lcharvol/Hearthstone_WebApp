import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: ${({ active }) => (active ? 0 : -300)}px;
  display: flex;
  width: 300px;
  background-color: rgb(25, 25, 25);
  height: 100vw;
  z-index: 2500;
  transition: left 0.7s ease-in-out;
`;
