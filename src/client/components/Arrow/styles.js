import styled from 'styled-components';

import LeftArrowIcon from '../../../../assets/UI/arrow_left.png';
import RightArrowIcon from '../../../../assets/UI/arrow_right.png';
import { LEFT, RIGHT } from './constants';

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 80px;
  max-width: 80px;
  height: 100%;
  z-index: 900;
`;

export const Icon = styled.div`
    position:absolute;
    display:flex;
    background-image: url("${({ direction }) =>
      direction === RIGHT ? RightArrowIcon : LeftArrowIcon}");
    background-size:cover;
    width:100%;
    height:80px;
    opacity: ${({ active }) => (active ? 1 : 0.5)};
    transform: scale(${({ active }) => (active ? 1 : 0.9)});
    transition: all 0.3s ease-in-out;
    ${({ direction }) => (direction === LEFT ? 'left' : 'right')}:30px;
    margin-top:-15px;
`;
