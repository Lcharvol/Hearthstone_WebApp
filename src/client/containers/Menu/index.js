import React from 'react';

import { Container, MenuBox } from './styles';

const Menu = ({ handleDisplayMenu }) => (
  <Container onClick={() => handleDisplayMenu()}>
    <MenuBox onClick={e => e.stopPropagation()} />
  </Container>
);

export default Menu;
