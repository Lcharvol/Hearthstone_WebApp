import React from 'react';

import {
  Container,
  TopBorder,
  BottomBorder,
  RightBorder,
  LeftBorder,
  TopLeftCorner,
  TopRightCorner,
  BottomRightCorner,
  BottomLeftCorner,
} from './styles';

const Borders = () => (
  <Container>
    <TopBorder />
    <BottomBorder />
    <RightBorder />
    <LeftBorder />
    <TopLeftCorner />
    <TopRightCorner />
    <BottomRightCorner />
    <BottomLeftCorner />
  </Container>
);

export default Borders;
