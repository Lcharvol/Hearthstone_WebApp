import React from 'react';
import { func } from 'prop-types';

import { Container, MenuBox } from './styles';

const propTypes = {
  handleDisplayMenu: func.isRequired,
};

const Menu = ({ handleDisplayMenu }) => (
  <Container onClick={() => handleDisplayMenu()}>
    <MenuBox onClick={e => e.stopPropagation()} />
  </Container>
);

Menu.propTypes = propTypes;

export default Menu;
