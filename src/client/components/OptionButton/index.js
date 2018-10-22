import React from 'react';
import { func } from 'prop-types';

import { Container } from './styles';

const propTypes = {
  handleDisplayMenu: func.isRequired,
};

const OptionButton = ({ handleDisplayMenu }) => (
  <Container onClick={() => handleDisplayMenu()} />
);

OptionButton.propTypes = propTypes;

export default OptionButton;
