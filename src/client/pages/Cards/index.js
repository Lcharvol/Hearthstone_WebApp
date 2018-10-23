import React from 'react';
import { number, func } from 'prop-types';

import { Container, CardsInner } from './styles';
import { HOME } from '../../constants/router';

const propTypes = {
  top: number.isRequired,
  modifyLocation: func.isRequired,
};

const Cards = ({ top, modifyLocation }) => (
  <Container top={top} onClick={() => modifyLocation(HOME)}>
    <CardsInner onClick={e => e.stopPropagation()} />
  </Container>
);

Cards.propTypes = propTypes;

export default Cards;
