import styled from 'styled-components';

import MenuBoxBackground from '../../../../assets/UI/menu_box.png';

export const Container = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(25, 25, 25, 0.2);
`;

export const MenuBox = styled.div`
    position:relative;
    width:400px;
    height:400px;
    background-image: url("${MenuBoxBackground}");
    background-size: cover; 
`;
