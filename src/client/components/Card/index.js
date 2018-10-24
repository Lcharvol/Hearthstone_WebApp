import React from 'react';
import { string, number } from 'prop-types';

import { Container, StyledImg } from './styles';

const propTypes = {
  imgAnimated: string,
  img: string,
  top: number,
  left: number,
};

const Card = ({ imgAnimated, img, top = 0, left = 0 }) => (
  <Container top={top} left={left}>
    <StyledImg src={imgAnimated || img} />
  </Container>
);

Card.propTypes = propTypes;

export default Card;
