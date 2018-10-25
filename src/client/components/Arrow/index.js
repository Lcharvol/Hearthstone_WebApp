import React from 'react';
import { string, func, bool } from 'prop-types';

import { Container, Icon } from './styles';

const propTypes = {
  direction: string.isRequired,
  action: func.isRequired,
  active: bool.isRequired,
};

const Arrow = ({ direction, action, active }) => (
  <Container direction={direction} onClick={() => action()}>
    <Icon direction={direction} active={active} />
  </Container>
);

Arrow.propTypes = propTypes;

export default Arrow;
