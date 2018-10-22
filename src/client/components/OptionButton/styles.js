import styled from 'styled-components';

import ButtonUI from '../../../../assets/UI/set.png';

export const Container = styled.div`
    position:fixed;
    background-image: url("${ButtonUI}");
    width:75px;
    height:55px;
    top:20px;
    right:20px;
    z-index:1000;
`;
