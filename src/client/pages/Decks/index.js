import React from 'react';

import { Container, DecksInner } from './styles';

const Decks = ({ top }) => (
  <Container top={top}>
    <DecksInner />
  </Container>
);

export default Decks;
