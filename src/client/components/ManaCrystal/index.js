import React from 'react';
import { number, func, bool } from 'prop-types';

import { Container } from './styles';

const propTypes = {
  value: number.isRequired,
  selected: bool.isRequired,
  handleChangeManaFilter: func.isRequired,
};

const ManaCrystal = ({ value, handleChangeManaFilter, selected }) => (
  <Container
    selected={selected}
    onClick={() => handleChangeManaFilter(selected ? null : value)}
  >
    {value}
  </Container>
);

ManaCrystal.propTypes = propTypes;

export default ManaCrystal;
