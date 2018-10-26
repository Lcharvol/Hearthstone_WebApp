import styled from 'styled-components';

export const Container = styled.div`
    position:relative;
    background-image: url("${({ icon }) => icon}");
    background-size:cover;
    min-width:50px;
    min-height:50px;
    max-width:50px;
    max-height:50px;
    margin:10px;
    opacity:${({ selected }) => (selected ? 1 : 0.4)}
    &:hover {
        opacity: 0.8;
    }
    transition: opacity 0.2s ease-in-out;
    @media (max-width: 800px) {
        min-width:30px;
        min-height:30px;
        max-width:30px;
        max-height:30px;
    }
`;
