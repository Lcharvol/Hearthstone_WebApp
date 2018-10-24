import React from 'react';
import { string, func } from 'prop-types';
import { find, propEq } from 'ramda';

import { Container } from './styles';
import { iconList } from './constants';

const propTypes = {
  elem: string.isRequired,
  handleChangeCategorie: func.isRequired,
};

const getIconFromClass = iconClass => {
  const classElem = find(propEq('name', iconClass))(iconList);
  return classElem ? classElem.icon : '';
};

const ClassIcon = ({ elem, handleChangeCategorie }) => (
  <Container
    icon={getIconFromClass(elem)}
    onClick={() => handleChangeCategorie(elem)}
  />
);

ClassIcon.propTypes = propTypes;

export default ClassIcon;
