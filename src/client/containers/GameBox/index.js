import React from 'react';
import { func } from 'prop-types';
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

const propTypes = {
  modifyLocation: func.isRequired,
};

const GameBox = ({ modifyLocation }) => (
  <Container>
    <Box />
    <GameBoxCenter>
      {map(
        button => (
          <Button
            key={button.id}
            onClick={() => modifyLocation(button.location)}
            {...button}
          >
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

GameBox.propTypes = propTypes;

export default GameBox;
