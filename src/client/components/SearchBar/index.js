import React from 'react';
import { length } from 'ramda';
import { string, func } from 'prop-types';

const propTypes = {
  searchValue: string.isRequired,
  handleChangeSearchValue: func.isRequired,
};

import { Container, StyledTextInput, ResetButton } from './styles';

const SearchBar = ({ searchValue, handleChangeSearchValue }) => (
  <Container>
    <StyledTextInput
      type="text"
      spellCheck="false"
      value={searchValue}
      onChange={e => handleChangeSearchValue(e.target.value)}
    />
    {length(searchValue) > 0 && (
      <ResetButton onClick={() => handleChangeSearchValue('')} />
    )}
  </Container>
);

SearchBar.propyTypes = propTypes;

export default SearchBar;
