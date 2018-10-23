import styled from 'styled-components';

export const Container = styled.div`
    position:relative;
    min-width:225px;
    min-height:350px;
    max-width:225px;
    max-height:350px;
    background-image: url("${({ img }) => img}");
    background-repeat: no-repeat;
    background-size: cover;
`;
