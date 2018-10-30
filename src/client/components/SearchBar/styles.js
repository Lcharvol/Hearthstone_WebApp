import styled from 'styled-components';

import SearchBarUI from '../../../../assets/UI/search_bar.png';
import CrossIcon from '../../../../assets/UI/cross.png';
import Cursor from '../../../../assets/UI/hand.png';
import CursorDown from '../../../../assets/UI/hand_down.png';

export const Container = styled.div`
    position:absolute;
    display:flex;
    justify-content: center;
    align-items: center;
    background-image: url("${SearchBarUI}");
    background-repeat:no-repeat;
    background-size:cover;
    height:35px;
    right:75px;
    bottom: -8px;
    width:280px;
    z-index:999;
`;

export const StyledTextInput = styled.input`
  position: relative;
  width: calc(100% - 40px);
  height: 100%;
  background-color: transparent;
  color: white;
  border: none;
  padding-left: 30px;
  padding-right: 20px;
  cursor: url("${Cursor}") 15 0, pointer;
  &:active {
    cursor: url("${CursorDown}") 15 0, pointer;
  };
  &:focus {
    outline: none;
  };
  font-family: 'Belweb';
  text-shadow: 2px 0 0 black, -2px 0 0 black, 0 2px 0 black, 0 -2px 0 black,
    1px 1px black, -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black;
`;

export const ResetButton = styled.div`
    position:absolute;
    top:7.5px;
    right:10px;
    width:20px;
    height:20px;
    background-image: url("${CrossIcon}");
    background-repeat:no-repeat;
    background-size:cover;
    z-index:1000;
`;
