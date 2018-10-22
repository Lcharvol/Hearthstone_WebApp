import styled from 'styled-components';

import BackgroundMenu from '../../../../assets/UI/game_box.png';
import BottomSideUI from '../../../../assets/UI/game_box_bottom.png';

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 940px;
  height: 830px;
  background-repeat: no-repeat;
  min-width: 920px;
`;

export const Box = styled.div`
    position:relative;
    background-image: url("${BackgroundMenu}");
    width:100%;
    height:710px;
    z-index:10;
`;

export const BottomSideContainer = styled.div`
    position:relative;
    background-image: url("${BottomSideUI}");
    width:500px;
    height:130px;
    background-repeat:no-repeat;
    background-size:cover;
    margin-top:-30px;
    z-index:5;
`;
