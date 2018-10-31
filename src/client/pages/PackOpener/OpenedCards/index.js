import React from 'react';
import { map } from 'ramda';
import { array, func } from 'prop-types';

import { Container, DoneButton } from './styles';
import Card from '../../../components/Card';

const propTypes = {
  cards: array.isRequired,
  handleChangeOpenedCards: func.isRequired,
  handleChangeOpening: func.isRequired,
};

const packCardsPositionById = id => {
  if (id === 0) return { top: 0, left: 275 };
  else if (id === 1) return { top: 110, left: 475 };
  else if (id === 2) return { top: 110, left: 75 };
  else if (id === 3) return { top: 375, left: 165 };
  else if (id === 4) return { top: 375, left: 390 };
};

const OpenedCards = ({
  cards,
  handleChangeOpenedCards,
  handleChangeOpening,
}) => (
  <Container>
    <DoneButton
      onClick={() => {
        handleChangeOpening(false);
        handleChangeOpenedCards([]);
      }}
    />
    {cards.map((card, id) => (
      <Card key={id} {...card} {...packCardsPositionById(id)} />
    ))}
  </Container>
);

OpenedCards.propTypes = propTypes;

export default OpenedCards;
