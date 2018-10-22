import React from 'react';

import { Container } from './styles';

const OptionButton = ({ handleDisplayMenu }) => (
  <Container onClick={() => handleDisplayMenu()} />
);

export default OptionButton;
