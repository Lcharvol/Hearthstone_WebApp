import styled from 'styled-components';

import BackgroundPackUI from '../../../../assets/UI/basic_pack.png';

export const Container = styled.div`
    position:absolute;
    display:flex;
    width:160px;
    height:220px;
    background-image: url("${BackgroundPackUI}");
    background-size:cover;
`;
