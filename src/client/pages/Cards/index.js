import React from 'react';
import { map } from 'ramda';
import { number, func, array } from 'prop-types';
import { compose, withStateHandlers } from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Container, CardsInner } from './styles';
import { HOME } from '../../constants/router';
import { getCardBacks } from '../../selectors/cards';
import Card from '../../components/Card';

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

const actions = {};

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
);
export default enhance(Cards);
