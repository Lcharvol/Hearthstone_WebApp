import styled from 'styled-components';

export const Container = styled.div`
    position:relative;
    width:225px;
    height:350px;
    background-image: url("${({ img }) => img}");
    background-repeat: no-repeat;
    background-size: cover;
`;
