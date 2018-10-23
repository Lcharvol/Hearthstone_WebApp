import React from 'react';
import { map, isEmpty } from 'ramda';
import { number, func, array } from 'prop-types';
import { compose, withStateHandlers, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Container, CardsInner } from './styles';
import { HOME } from '../../constants/router';
import { getCardBacks } from '../../selectors/cards';
import Card from '../../components/Card';
import { loadCardBacks } from '../../requests';
import { initCardBacks } from '../../actions/cards';

const propTypes = {
  top: number.isRequired,
  modifyLocation: func.isRequired,
  cardBacks: array.isRequired,
};

const Cards = ({ top, modifyLocation, cardBacks = [] }) => (
  <Container top={top} onClick={() => modifyLocation(HOME)}>
    <CardsInner onClick={e => e.stopPropagation()}>
      {map(
        cardBack => (
          <Card key={cardBack.cardBackId} {...cardBack} />
        ),
        cardBacks,
      )}
    </CardsInner>
  </Container>
);

Cards.propTypes = propTypes;

const actions = { initCardBacks };

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

const mapStateToProps = state => ({
  cardBacks: getCardBacks(state),
});

const enhance = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withStateHandlers(
    ({ initialStart = 0 }) => ({
      start: initialStart,
    }),
    {
      handleChangeStart: () => newStart => ({
        start: newStart,
      }),
    },
  ),
  lifecycle({
    componentDidMount() {
      if (isEmpty(this.props.cardBacks) && this.props.top === 0)
        loadCardBacks().then(cardBacks => this.props.initCardBacks(cardBacks));
    },
  }),
);
export default enhance(Cards);
