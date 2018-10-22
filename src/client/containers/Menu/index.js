import React from 'react';
import { func } from 'prop-types';
import { map } from 'ramda';

import { Container, MenuBox } from './styles';
import buttons from './buttons';
import Button from '../../components/Button';

const propTypes = {
  handleDisplayMenu: func.isRequired,
};

const Menu = ({ handleDisplayMenu }) => (
  <Container onClick={() => handleDisplayMenu()}>
    <MenuBox onClick={e => e.stopPropagation()}>
      {map(
        button => (
          <Button key={button.id} label={button.label} />
        ),
        buttons,
      )}
    </MenuBox>
  </Container>
);

Menu.propTypes = propTypes;

export default Menu;
