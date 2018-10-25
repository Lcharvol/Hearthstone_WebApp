import styled from 'styled-components';

import BorderLineUI from '../../../../assets/UI/border_line.png';
import BorderColumnUI from '../../../../assets/UI/border_column.png';
import MetalCornerUI from '../../../../assets/UI/metal_corner.png';

export const Container = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const TopBorder = styled.div`
    position:absolute;
    background-image: url("${BorderLineUI}");
    background-size:cover;
    width:100%;
    height:20px;
    top:0;
    left:0;
    z-index:990;
    background-color:black;
`;

export const BottomBorder = styled.div`
    position:absolute;
    background-image: url("${BorderLineUI}");
    background-size:cover;
    width:100%;
    height:20px;
    bottom:0;
    left:0;
    z-index:990;
    background-color:black;
`;

export const RightBorder = styled.div`
    position:absolute;
    background-image: url("${BorderColumnUI}");
    background-size:cover;
    width:20px;
    height:100%;
    bottom:0;
    left:0;
    z-index:990;
    background-color:black;
`;

export const LeftBorder = styled.div`
    position:absolute;
    background-image: url("${BorderColumnUI}");
    background-size:cover;
    width:20px;
    height:100%;
    bottom:0;
    right:0;
    z-index:990;
    background-color:black;
`;

export const TopLeftCorner = styled.div`
    position:absolute;
    background-image: url("${MetalCornerUI}");
    background-size:cover;
    width:65px;
    height:65px;
    top:-5px;
    left:-5px;
    z-index:995;
`;

export const TopRightCorner = styled.div`
    position:absolute;
    background-image: url("${MetalCornerUI}");
    background-size:cover;
    width:65px;
    height:65px;
    top:-5px;
    right:-5px;
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
    z-index:995;
`;

export const BottomRightCorner = styled.div`
    position:absolute;
    background-image: url("${MetalCornerUI}");
    background-size:cover;
    width:65px;
    height:65px;
    bottom:-5px;
    right:-5px;
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
    z-index:995;
`;

export const BottomLeftCorner = styled.div`
    position:absolute;
    background-image: url("${MetalCornerUI}");
    background-size:cover;
    width:65px;
    height:65px;
    bottom:-5px;
    left:-5px;
    -webkit-transform: rotate(270deg);
    transform: rotate(270deg);
    z-index:995;
`;
