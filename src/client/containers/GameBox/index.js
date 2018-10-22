import React from 'react';
import { map } from 'ramda';

import {
  Container,
  Box,
  BottomSideContainer,
  BottomSideLeft,
  BottomSideRight,
  GameBoxCenter,
  Button,
} from './styles';
import buttons from './buttons';

const GameBox = () => (
  <Container>
    <Box />
    <GameBoxCenter>
      {map(
        button => (
          <Button key={button.id} {...button}>
            {button.label}
          </Button>
        ),
        buttons,
      )}
    </GameBoxCenter>
    <BottomSideContainer>
      <BottomSideLeft />
      <BottomSideRight />
    </BottomSideContainer>
  </Container>
);

export default GameBox;
