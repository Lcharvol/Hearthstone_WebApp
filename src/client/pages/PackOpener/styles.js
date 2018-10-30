import styled from 'styled-components';
import PackOpenerBackgroundUI from '../../../../assets/UI/pack_opener_background.png';

export const Container = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  z-index: 300;
  top: ${({ top }) => top}vh;
  transition: top 0.4s ease-in-out, background-color 0.2s ease-in;
`;

export const PackOpenerInner = styled.div`
    position:relative;
    background-image: url("${PackOpenerBackgroundUI}");
    width:930px;
    height:670px;
    background-repeat:no-repeat;
    background-size:cover;
`;
