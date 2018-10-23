import React from 'react';
import { number, func } from 'prop-types';

import { Container, FriendsCount } from './styles';

const propTypes = {
  connectedFriends: number.isRequired,
  handleDisplaySocialMenu: func.isRequired,
};

const FriendsButton = ({ connectedFriends, handleDisplaySocialMenu }) => (
  <Container onClick={() => handleDisplaySocialMenu()}>
    <FriendsCount>{connectedFriends}</FriendsCount>
  </Container>
);

FriendsButton.propTypes = propTypes;

export default FriendsButton;
