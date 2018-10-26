import React from 'react';
import { times } from 'ramda';
import { number, func } from 'prop-types';

import { Container } from './styles';
import ManaCrystal from '../../components/ManaCrystal';

const propTypes = {
  manaFilter: number,
  handleChangeManaFilter: func.isRequired,
};

const ManaCristals = ({ manaFilter, handleChangeManaFilter }) => (
  <Container>
    {times(
      i => (
        <ManaCrystal
          key={i}
          selected={manaFilter === i}
          handleChangeManaFilter={handleChangeManaFilter}
          value={i}
        />
      ),
      8,
    )}
  </Container>
);

ManaCristals.propTypes = propTypes;

export default ManaCristals;
