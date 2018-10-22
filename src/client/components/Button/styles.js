import styled from 'styled-components';

import ButtonBackgroundImage from '../../../../assets/UI/button_background.png';
import ButtonInnerImage from '../../../../assets/UI/button_inner.png';

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;
  margin-top: ${({ margin }) => margin};
  font-size: 0.3em;
`;

export const ButtonBackground = styled.div`
    position:relative;
    display:flex;
    justify-content: center;
    align-items: center;
    background-image: url("${ButtonBackgroundImage}");
    background-size: cover;
    width:200px;
    height:65px;
`;

export const ButtonInner = styled.div`
    position:relative;
    display:flex;
    justify-content: center;
    align-items: center;
    width:110px;
    height:45px;
    background-image: url("${ButtonInnerImage}");
    background-size: cover;
    &:hover{
        transform: scale(0.95);
        opacity:0.9;
    }
    transition: transform 0.1s ease-in-out;
    font-size:0.3em;
    user-select: none;
`;
