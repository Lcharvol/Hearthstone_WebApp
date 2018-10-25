import React from 'react';
import { object } from 'prop-types';

import { Container, Name } from './styles';
import Avatar from '../../../components/Avatar';

const propTypes = {
  user: object.isRequired,
};

const Header = ({ user: { name } }) => (
  <Container>
    <Avatar />
    <Name>{name}</Name>
  </Container>
);

Header.propTypes = propTypes;

export default Header;
