import styled from 'styled-components';

import BackgroundMenu from '../../../../assets/UI/game_box.png';
import BottomSideUIFrame from '../../../../assets/UI/game_box_bottom_frame.png';
import BottomSideUILeft from '../../../../assets/UI/game_box_bottom_left.png';
import BottomSideUIRight from '../../../../assets/UI/game_box_bottom_right.png';
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
    display:flex;
    justify-content: center;
    align-items: center;
    background-image: url("${BottomSideUIFrame}");
    width:530px;
    height:130px;
    background-repeat:no-repeat;
    background-size:cover;
    margin-top:-30px;
    z-index:5;
`;

export const BottomSideLeft = styled.div`
    position:relative;
    background-image: url("${BottomSideUILeft}");
    height:80%;
    width:130px;
    background-repeat:no-repeat;
    background-size:cover;
    margin-top:-25px;
    margin-right:5px;
    &:hover{
        margin-top:-35px;
    };
    transition: margin-top 0.3s ease-in-out;
`;

export const BottomSideRight = styled.div`
    position:relative;
    background-image: url("${BottomSideUIRight}");
    height:80%;
    width:260px;
    background-repeat:no-repeat;
    background-size:cover;
    margin-top:-25px;
    &:hover{
        margin-top:-35px;
    };
    transition: margin-top 0.3s ease-in-out;
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
    display:flex;
    justify-content: center;
    align-items: center;
    background-image: url("${({ UI }) => UI}");
    background-size:cover;
    height:${({ height }) => height}px;
    width:${({ width }) => width}px;
    margin-top:${({ top }) => top}px;
    margin-left:${({ left }) => left}px;
    &:hover{
        transform: scale(0.95);
        opacity:0.9;
    }
    transition: transform 0.1s ease-in-out;
    font-size:0.3em;
    user-select: none;
`;
