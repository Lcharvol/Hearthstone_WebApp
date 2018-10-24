import React from 'react';
import { string, func } from 'prop-types';

import { Container, Icon } from './styles';

const propTypes = {
  direction: string.isRequired,
  action: func.isRequired,
};

const Arrow = ({ direction, action }) => (
  <Container direction={direction} onClick={() => action()}>
    <Icon direction={direction} />
  </Container>
);

Arrow.propTypes = propTypes;

export default Arrow;
