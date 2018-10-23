import styled from 'styled-components';

export const Container = styled.div`
    position:relative;
    background-image: url("${({ icon }) => icon}");
    background-size:cover;
    width:50px;
    height:50px;
    margin:10px;
`;
