import React from 'react';
import Img from 'react-image';

import { Container } from './styles';

const Card = ({ imgAnimated, img }) => (
  <Container>
    <Img src={img} />
  </Container>
);

export default Card;
