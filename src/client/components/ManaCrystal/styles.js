import styled from 'styled-components';

import ManaCrystalUI from '../../../../assets/UI/mana_crystal.png';

export const Container = styled.div`
    positino:relative;
    display:flex;
    justify-content: center;
    align-items: center;
    width:40px;
    height:40px;
    background-image: url("${ManaCrystalUI}");
    background-repeat:no-repeat;
    background-size:cover;
    margin-left:5px;
    margin-right:5px;
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
