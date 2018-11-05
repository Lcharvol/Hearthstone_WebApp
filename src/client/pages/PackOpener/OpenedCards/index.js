import React from 'react';
import { contains } from 'ramda';
import { array, func } from 'prop-types';
import { withStateHandlers, compose } from 'recompose';

import { Container, DoneButton } from './styles';
import Card from '../../../components/Card';

const propTypes = {
  cards: array.isRequired,
  handleChangeOpenedCards: func.isRequired,
  handleChangeOpening: func.isRequired,
  cardSideStatus: array.isRequired,
  handleChangeCardStatus: func.isRequired,
};

const packCardsPositionById = id => {
  if (id === 0) return { top: 0, left: 275 };
  else if (id === 1) return { top: 110, left: 475 };
  else if (id === 2) return { top: 110, left: 75 };
  else if (id === 3) return { top: 375, left: 165 };
  else if (id === 4) return { top: 375, left: 390 };
};

const isOpeningEnded = cardSideStatus => !contains(false, cardSideStatus);

const OpenedCards = ({
  cards,
  handleChangeOpenedCards,
  handleChangeOpening,
  cardSideStatus,
  handleChangeCardStatus,
}) => (
  <Container>
    <DoneButton
      onClick={() => {
        if (isOpeningEnded(cardSideStatus)) {
          handleChangeOpening(false);
          handleChangeOpenedCards([]);
        }
      }}
      isOpeningEnded={isOpeningEnded(cardSideStatus)}
    />
    {cards.map((card, id) => (
      <Card
        key={id}
        {...card}
        {...packCardsPositionById(id)}
        handleChangeCardStatus={handleChangeCardStatus}
        showSide={cardSideStatus[id] ? 'front' : 'back'}
        cardId={id}
        reversible
      />
    ))}
  </Container>
);

OpenedCards.propTypes = propTypes;

const enhance = compose(
  withStateHandlers(
    ({ initialCardSideStatus = [false, false, false, false, false] }) => ({
      cardSideStatus: initialCardSideStatus,
    }),
    {
      handleChangeCardStatus: ({ cardSideStatus }) => cardId => {
        let newCardSideStatus = cardSideStatus;
        newCardSideStatus[cardId] = !newCardSideStatus[cardId];
        return {
          cardSideStatus: newCardSideStatus,
        };
      },
    },
  ),
);
export default enhance(OpenedCards);
