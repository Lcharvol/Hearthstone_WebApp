import styled from 'styled-components';

import ManaCrystalUI from '../../../../assets/UI/mana_crystal.png';

export const Container = styled.div`
    positino:relative;
    display:flex;
    justify-content: center;
    align-items: center;
    background-image: url("${ManaCrystalUI}");
    background-repeat:no-repeat;
    background-size:cover;
    min-width:50px;
    min-height:50px;
    max-width:50px;
    max-height:50px;
    margin:10px;
    transition: opacity 0.2s ease-in-out;
    @media (max-width: 1200px) {
        margin:5px;
    }
    @media (max-width: 1000px) {
        min-width:40px;
        min-height:40px;
        max-width:40px;
        max-height:40px;
    }
    opacity:${({ selected }) => (selected ? 1 : 0.4)};
    &:hover {
        opacity:1;
    }
    transition: all 0.1s ease-in-out;
    color:white;
    font-size:0.5em;
    text-shadow: 
        1px 1px black, -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black;
`;
