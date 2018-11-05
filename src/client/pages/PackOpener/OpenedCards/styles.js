import styled from 'styled-components';

import DoneButtonUI from '../../../../../assets/UI/done_button.png';

export const Container = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 100%;
  z-index: 400;
  right: 0;
`;

export const DoneButton = styled.div`
    position:relative;
    background-image: url("${DoneButtonUI}");
    background-size: cover;
    width:105px;
    height:55px;
    &:hover {
       ${({ isOpeningEnded }) => isOpeningEnded && 'transform: scale(0.9);'}
    };
    transition: transform 0.1s ease-in-out;
    opacity: ${({ isOpeningEnded }) => (isOpeningEnded ? 1 : 0.7)}
`;
