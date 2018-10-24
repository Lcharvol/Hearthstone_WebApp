import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: 330px;
  max-width: 230px;
  transform: scale(0.8);
  &:hover {
    transform: scale(0.9);
  }
  transition: transform 0.2s ease-in-out;
`;
