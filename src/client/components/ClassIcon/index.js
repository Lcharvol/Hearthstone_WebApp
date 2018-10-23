import React from 'react';
import { find, propEq } from 'ramda';
import { Container } from './styles';
import { iconList } from './constants';

const getIconFromClass = iconClass => {
  const classElem = find(propEq('name', iconClass))(iconList);
  return classElem ? classElem.icon : '';
};

const ClassIcon = ({ elem }) => <Container icon={getIconFromClass(elem)} />;

export default ClassIcon;
