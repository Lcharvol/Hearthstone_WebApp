import styled from 'styled-components';

import BackgroundMenu from '../../../../assets/UI/game_box.png';
import BottomSideUI from '../../../../assets/UI/game_box_bottom.png';
import CenterUI from '../../../../assets/UI/game_box_center.png';

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 940px;
  height: 830px;
  background-repeat: no-repeat;
  min-width: 940px;
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

export const GameBoxCenter = styled.div`
    position:absolute;
    display:flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction:column;
    background-image: url("${CenterUI}");
    background-size:cover;
    width:300px;
    height:300px;
    z-index:15;
    margin-top:-40px;
    margin-left:-4px;
`;

export const Button = styled.div`
    position:relative;
    background-image: url("${({ UI }) => UI}");
    background-size:cover;
    height:${({ height }) => height}px;
    width:${({ width }) => width}px;
    margin-top:${({ top }) => top}px;
    margin-left:${({ left }) => left}px;
    &:hover{
        transform: scale(0.95);
    }
`;
