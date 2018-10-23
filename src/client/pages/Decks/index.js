import React from 'react';
import { number, func } from 'prop-types';

import { Container, DecksInner } from './styles';
import { HOME } from '../../constants/router';

const propTypes = {
  top: number.isRequired,
  modifyLocation: func.isRequired,
};

const Decks = ({ top, modifyLocation }) => (
  <Container top={top} onClick={() => modifyLocation(HOME)}>
    <DecksInner onClick={e => e.stopPropagation()} />
  </Container>
);

Decks.propTypes = propTypes;

export default Decks;
