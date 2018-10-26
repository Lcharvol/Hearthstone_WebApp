import React from 'react';
import { string, number } from 'prop-types';
import { onlyUpdateForKeys } from 'recompose';

import { Container, StyledImg, ImageContainer } from './styles';

const propTypes = {
  imgAnimated: string,
  img: string,
  top: number,
  left: number,
};

const Card = ({ imgAnimated, img, imgGold, top = 0, left = 0 }) => (
  <Container top={top} left={left}>
    <ImageContainer>
      <StyledImg src={imgAnimated || img || imgGold} />
    </ImageContainer>
  </Container>
);

Card.propTypes = propTypes;

export default onlyUpdateForKeys(['top', 'left', 'img'])(Card);
