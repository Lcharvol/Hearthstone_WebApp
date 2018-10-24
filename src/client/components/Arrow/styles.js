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
  height: calc(100% - 75px);
`;

export const Icon = styled.div`
    position:relative;
    display:flex;
    background-image: url("${({ direction }) =>
      direction === RIGHT ? RightArrowIcon : LeftArrowIcon}");
    background-size:cover;
    width:100%;
    height:80px;
`;
