import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  min-width: 50px;
  min-height: 50px;
  max-width: 50px;
  max-height: 50px;
  margin: 10px;
  transition: opacity 0.2s ease-in-out;
  @media (max-width: 1200px) {
    margin: 5px;
  }
  @media (max-width: 1000px) {
    min-width: 35px;
    min-height: 35px;
    max-width: 35px;
    max-height: 35px;
  }
  display: ${({ icon }) => (icon !== '' ? 'flex' : 'none')};
  border-radius: 100%;
  background-color: black;
  ${({ selected }) =>
    selected && ' box-shadow: 0 0 3px 1px #fff, 0 0 7px 4px #0ff;'};
`;

export const Icon = styled.div`
    position:relative;
    display:flex;
    width:100%;
    height:100%;
    background-image: url("${({ icon }) => icon}");
    background-size:cover;
    opacity:${({ selected }) => (selected ? 1 : 0.6)}
    &:hover {
        opacity: 1;
    }
`;
