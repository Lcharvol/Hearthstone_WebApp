import React from 'react';
import { number } from 'prop-types';

import { Container, FriendsCount } from './styles';

const propTypes = {
  connectedFriends: number.isRequired,
};

const FriendsButton = ({ connectedFriends }) => (
  <Container>
    <FriendsCount>{connectedFriends}</FriendsCount>
  </Container>
);

FriendsButton.propTypes = propTypes;

export default FriendsButton;
