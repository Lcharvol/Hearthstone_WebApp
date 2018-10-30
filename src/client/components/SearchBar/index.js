import React from 'react';
import { string, func } from 'prop-types';

const propTypes = {
  searchValue: string.isRequired,
  handleChangeSearchValue: func.isRequired,
};

import { Container, StyledTextInput } from './styles';

const SearchBar = ({ searchValue, handleChangeSearchValue }) => (
  <Container>
    <StyledTextInput
      value={searchValue}
      onChange={e => handleChangeSearchValue(e.target.value)}
    />
  </Container>
);

SearchBar.propyTypes = propTypes;

export default SearchBar;
