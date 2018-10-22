import React from 'react';
import { map } from 'ramda';

import {
  Container,
  Box,
  BottomSideContainer,
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
          <Button key={button.id} {...button} />
        ),
        buttons,
      )}
    </GameBoxCenter>
    <BottomSideContainer />
  </Container>
);

export default GameBox;
