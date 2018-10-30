import React from 'react';
import { number, func } from 'prop-types';

import { Container, PackOpenerInner } from './styles';
import { HOME } from '../../constants/router';

const propTypes = {
  top: number.isRequired,
  modifyLocation: func.isRequired,
};

const PackOpener = ({ top, modifyLocation }) => (
  <Container top={top} onClick={() => modifyLocation(HOME)}>
    <PackOpenerInner onClick={e => e.stopPropagation()} />
  </Container>
);

PackOpener.propTypes = propTypes;

export default PackOpener;
