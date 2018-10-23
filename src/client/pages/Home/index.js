import React from 'react';
import { bool, func, string } from 'prop-types';
import { compose, lifecycle, withStateHandlers } from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Container, Shadow } from './styles';
import { reqPing } from '../../requests';
import Cards from '../Cards';
import Decks from '../Decks';
import GameBox from '../../containers/GameBox';
import Menu from '../../containers/Menu';
import SocialMenu from '../../containers/SocialMenu';
import OptionButton from '../../components/OptionButton';
import FriendsButton from '../../components/FriendsButton';
import { modifyLocation, handleDisplaySocialMenu } from '../../actions/app';
import { getIsFetching, getDisplaySocialMenu } from '../../selectors/app';
import { getLocation } from '../../selectors/app';
import { CARDS, DECKS, HOME } from '../../constants/router';

const proptypes = {
  displayMenu: bool.isRequired,
  handleDisplayMenu: func.isRequired,
  location: string.isRequired,
  modifyLocation: func.isRequired,
  handleDisplaySocialMenu: func.isRequired,
  displaySocialMenu: bool.isRequired,
};

const Home = ({
  displayMenu,
  handleDisplayMenu,
  location,
  displaySocialMenu,
  modifyLocation,
  handleDisplaySocialMenu,
}) => (
  <Container>
    <Shadow
      active={location !== HOME || displaySocialMenu}
      onClick={() => modifyLocation(HOME)}
    />
    <GameBox modifyLocation={modifyLocation} />
    <SocialMenu active={displaySocialMenu} />
    <Cards
      top={location === CARDS ? 0 : -100}
      modifyLocation={modifyLocation}
    />
    <Decks
      top={location === DECKS ? 0 : -100}
      modifyLocation={modifyLocation}
    />
    <FriendsButton
      connectedFriends={0}
      handleDisplaySocialMenu={handleDisplaySocialMenu}
    />
    <OptionButton handleDisplayMenu={handleDisplayMenu} />
    {displayMenu && <Menu handleDisplayMenu={handleDisplayMenu} />}
  </Container>
);

Home.propTypes = proptypes;

const actions = {
  modifyLocation,
  handleDisplaySocialMenu,
};

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

const mapStateToProps = state => ({
  isFetching: getIsFetching(state),
  location: getLocation(state),
  displaySocialMenu: getDisplaySocialMenu(state),
});

const enhance = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withStateHandlers(
    ({ initialDisplayMenu = false }) => ({
      displayMenu: initialDisplayMenu,
    }),
    {
      handleDisplayMenu: ({ displayMenu }) => () => ({
        displayMenu: !displayMenu,
      }),
    },
  ),
  lifecycle({
    componentDidMount() {
      reqPing()
        .then(res => console.log(res))
        .catch(err => console.log('err: ', err));
    },
  }),
);
export default enhance(Home);
