import React from 'react';
import { bool, func } from 'prop-types';
import { compose, lifecycle, withStateHandlers } from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Container } from './styles';
import { reqPing } from '../../requests';
import GameBox from '../../containers/GameBox';
import OptionButton from '../../components/OptionButton';
import Menu from '../../containers/Menu';

const proptypes = {
  displayMenu: bool.isRequired,
  handleDisplayMenu: func.isRequired,
};

const Home = ({ displayMenu, handleDisplayMenu }) => (
  <Container>
    <GameBox />
    <OptionButton handleDisplayMenu={handleDisplayMenu} />
    {displayMenu && <Menu handleDisplayMenu={handleDisplayMenu} />}
  </Container>
);

Home.propTypes = proptypes;

const actions = {};

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

const enhance = compose(
  connect(
    null,
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
