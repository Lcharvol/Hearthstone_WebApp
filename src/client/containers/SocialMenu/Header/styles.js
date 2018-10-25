import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 80px;
`;

export const Name = styled.div`
  position: relative;
  color: rgb(99, 202, 238);
  font-size: 0.4em;
  text-shadow: 2px 0 0 black, -2px 0 0 black, 0 2px 0 black, 0 -2px 0 black,
    1px 1px black, -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black;
`;
