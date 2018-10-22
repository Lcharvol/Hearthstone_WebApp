import React from 'react';
import { string } from 'prop-types';

import { Container, ButtonBackground, ButtonInner } from './styles';

const propTypes = {
  label: string.isRequired,
  margin: string,
};

const Button = ({ label, margin = '40px' }) => (
  <Container margin={margin}>
    <ButtonBackground>
      <ButtonInner>{label}</ButtonInner>
    </ButtonBackground>
  </Container>
);

export default Button;
