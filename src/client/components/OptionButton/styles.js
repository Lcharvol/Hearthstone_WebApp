import styled from 'styled-components';

import ButtonUI from '../../../../assets/UI/set.png';

export const Container = styled.div`
    position:fixed;
    display: flex;
    background-image: url("${ButtonUI}");
    background-size:cover;
    background-repeat:no-repeat;
    width:65px;
    height:45px;
    top:20px;
    right:20px;
    z-index:1000;
`;
