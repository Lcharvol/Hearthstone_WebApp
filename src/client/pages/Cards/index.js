import React from 'react';
import { map, isEmpty } from 'ramda';
import { number, func, array } from 'prop-types';
import { compose, withStateHandlers, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Container, CardsInner, CardsNavigation, CardsHeader } from './styles';
import { HOME } from '../../constants/router';
import Card from '../../components/Card';
import ClassIcon from '../../components/ClassIcon';
import { loadCardBacks } from '../../requests';
import { initCardBacks } from '../../actions/cards';
import { getCardBacks } from '../../selectors/cards';
import { getClasses } from '../../selectors/app';
import { CARD_BACKS } from './constants';

const propTypes = {
  top: number.isRequired,
  modifyLocation: func.isRequired,
  cardBacks: array.isRequired,
  classes: array,
};

const Cards = ({ top, modifyLocation, cardBacks = [], classes = [] }) => (
  <Container top={top} onClick={() => modifyLocation(HOME)}>
    <CardsInner onClick={e => e.stopPropagation()}>
      <CardsHeader>
        {classes.map((elem, id) => (
          <ClassIcon key={id} elem={elem} />
        ))}
      </CardsHeader>
      <CardsNavigation>
        {map(
          cardBack => (
            <Card key={cardBack.cardBackId} {...cardBack} />
          ),
          cardBacks,
        )}
      </CardsNavigation>
    </CardsInner>
  </Container>
);

Cards.propTypes = propTypes;

const actions = { initCardBacks };

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

const mapStateToProps = state => ({
  cardBacks: getCardBacks(state),
  classes: getClasses(state),
});

const enhance = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withStateHandlers(
    ({ initialStart = 0, initialCategorie = CARD_BACKS }) => ({
      start: initialStart,
      categorie: initialCategorie,
    }),
    {
      handleChangeStart: () => newStart => ({
        start: newStart,
      }),
      handleChangeCategorie: () => newCategorie => ({
        categorie: newCategorie,
      }),
    },
  ),
  lifecycle({
    componentDidMount() {
      if (isEmpty(this.props.cardBacks))
        loadCardBacks().then(cardBacks => this.props.initCardBacks(cardBacks));
    },
  }),
);
export default enhance(Cards);
