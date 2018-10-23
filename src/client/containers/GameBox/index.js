import React, { Fragment } from 'react';
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
  ButtonFrontSide,
  ButtonBackSide,
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
            {...button}
            onMouseDown={() => modifyLocation(button.location)}
          >
            <ButtonFrontSide {...button}>{button.label}</ButtonFrontSide>
            <ButtonBackSide {...button} />
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
