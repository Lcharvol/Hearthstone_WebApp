import React from 'react';
import { object } from 'prop-types';

import { Container } from './styles';

const propTypes = {
  friend: object.isRequired,
};

const Friend = ({ friend: { name, avatarId, tag, online } }) => <Container />;

Friend.propTypes = propTypes;

export default Friend;
