import React from 'react';
import { string } from 'prop-types';

import { Container, ButtonBackground, ButtonInner } from './styles';

const propTypes = {
  label: string.isRequired,
};

const Button = ({ label }) => (
  <Container>
    <ButtonBackground>
      <ButtonInner>{label}</ButtonInner>
    </ButtonBackground>
  </Container>
);

export default Button;
