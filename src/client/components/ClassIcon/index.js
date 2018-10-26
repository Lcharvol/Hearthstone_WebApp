import React from 'react';
import { string, func, bool } from 'prop-types';
import { find, propEq } from 'ramda';

import { Container, Icon } from './styles';
import { iconList } from './constants';

const propTypes = {
  elem: string.isRequired,
  handleChangeCategorie: func.isRequired,
  selected: bool.isRequired,
};

const getIconFromClass = iconClass => {
  const classElem = find(propEq('name', iconClass))(iconList);
  return classElem ? classElem.icon : '';
};

const ClassIcon = ({ elem, handleChangeCategorie, selected }) => (
  <Container icon={getIconFromClass(elem)} selected={selected}>
    <Icon
      icon={getIconFromClass(elem)}
      onClick={() => handleChangeCategorie(elem)}
      selected={selected}
    />
  </Container>
);

ClassIcon.propTypes = propTypes;

export default ClassIcon;
