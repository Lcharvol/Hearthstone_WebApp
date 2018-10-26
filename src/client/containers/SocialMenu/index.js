import React from 'react';
import { bool, object } from 'prop-types';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Container, Content, Friends } from './styles';
import { getUser } from '../../selectors/user';
import Friend from './Friend';
import Header from './Header';

const propTypes = {
  active: bool.isRequired,
  user: object.isRequired,
};

const SocialMenu = ({ active, user }) => (
  <Container active={active}>
    <Header user={user} />
    <Content>
      <Friends>
        {user.friends.map((friend, id) => (
          <Friend key={id} friend={friend} />
        ))}
      </Friends>
    </Content>
  </Container>
);

SocialMenu.propTypes = propTypes;

const actions = {};

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

const mapStateToProps = state => ({
  user: getUser(state),
});

const enhance = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
);

export default enhance(SocialMenu);
