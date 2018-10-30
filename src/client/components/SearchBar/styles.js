import styled from 'styled-components';

import SearchBarUI from '../../../../assets/UI/search_bar.png';

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
  padding-left: 20px;
  padding-right: 20px;
`;
