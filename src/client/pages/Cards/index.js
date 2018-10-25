import React from 'react';
import { map, length, isEmpty, equals } from 'ramda';
import { number, func, array, string } from 'prop-types';
import { compose, withStateHandlers, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  Container,
  CardsInner,
  CardsContent,
  CardsNavigation,
  CardsHeader,
} from './styles';
import { HOME } from '../../constants/router';
import Card from '../../components/Card';
import ClassIcon from '../../components/ClassIcon';
import Arrow from '../../components/Arrow';
import { LEFT, RIGHT } from '../../components/Arrow/constants';
import CardPreview from '../../containers/CardPreview';
import { loadCardBacks, loadCardsByClass } from '../../requests';
import { enhanceCards } from '../../actions/cards';
import {
  getCardBacks,
  getDeathKnightCards,
  getDruidCards,
  getHunterCards,
  getMageCards,
  getPaladinCards,
  getPriestCards,
  getRogueCards,
  getShamanCards,
  getWarlockCards,
  getWarriorCards,
} from '../../selectors/cards';
import { getClasses } from '../../selectors/app';
import {
  CARD_BACKS,
  DEATH_KNIGHT,
  DRUID,
  HUNTER,
  MAGE,
  PALADIN,
  PRIEST,
  ROGUE,
  SHAMAN,
  WARLOCK,
  WARRIOR,
  PAGE_SIZE,
  CONTAINER_WIDTH,
  CARD_PER_LINE,
} from './constants';
import { CARD_WIDTH, CARD_HEIGHT } from '../../constants/card';

const propTypes = {
  top: number.isRequired,
  modifyLocation: func.isRequired,
  cardBacks: array.isRequired,
  classes: array,
  categorie: string.isRequired,
  handleChangeCategorie: func.isRequired,
};

const getCardsByCategorie = (categorie, cards) => {
  if (categorie === CARD_BACKS) return cards.cardBacks || [];
  else if (categorie === DEATH_KNIGHT) return cards.deathKnightCards || [];
  else if (categorie === DRUID) return cards.druidCards || [];
  else if (categorie === HUNTER) return cards.hunterCards || [];
  else if (categorie === MAGE) return cards.mageCards || [];
  else if (categorie === PALADIN) return cards.paladinCards || [];
  else if (categorie === PRIEST) return cards.priestCards || [];
  else if (categorie === ROGUE) return cards.rogueCards || [];
  else if (categorie === SHAMAN) return cards.shamanCards || [];
  else if (categorie === WARLOCK) return cards.warlockCards || [];
  else if (categorie === WARRIOR) return cards.warriorCards || [];
  return [];
};

const Cards = ({
  top,
  modifyLocation,
  classes = [],
  categorie,
  enhanceCards,
  handleChangeStart,
  start,
  handleChangeCategorie,
  ...cardsByCategories
}) => {
  const isArrowActive = (direction, start, length) => {
    if (equals(direction, RIGHT)) return start + PAGE_SIZE <= length;
    if (equals(direction, LEFT)) return start - PAGE_SIZE >= 0;
  };
  return (
    <Container
      top={top}
      onClick={() => {
        handleChangeCategorie(CARD_BACKS);
        modifyLocation(HOME);
      }}
    >
      <CardsInner onClick={e => e.stopPropagation()}>
        <CardsHeader>
          {[CARD_BACKS, ...classes].map((elem, id) => (
            <ClassIcon
              key={id}
              elem={elem}
              selected={elem === categorie}
              handleChangeCategorie={handleChangeCategorie}
            />
          ))}
        </CardsHeader>
        <CardsContent>
          <Arrow
            direction={LEFT}
            active={isArrowActive(
              LEFT,
              start,
              length(getCardsByCategorie(categorie, cardsByCategories)),
            )}
            action={() =>
              handleChangeStart(start - PAGE_SIZE < 0 ? 0 : start - PAGE_SIZE)
            }
          />
          <CardsNavigation start={start}>
            {getCardsByCategorie(categorie, cardsByCategories).map(
              (card, id) => (
                <Card
                  key={id}
                  top={
                    Math.floor((id % PAGE_SIZE) / CARD_PER_LINE) * CARD_HEIGHT
                  }
                  left={
                    (id % CARD_PER_LINE) * CARD_WIDTH +
                    Math.floor(id / PAGE_SIZE) * CONTAINER_WIDTH -
                    Math.floor(start / PAGE_SIZE) * CONTAINER_WIDTH
                  }
                  {...card}
                />
              ),
            )}
          </CardsNavigation>
          <Arrow
            direction={RIGHT}
            active={isArrowActive(
              RIGHT,
              start,
              length(getCardsByCategorie(categorie, cardsByCategories)),
            )}
            action={() =>
              handleChangeStart(
                start + PAGE_SIZE <=
                length(getCardsByCategorie(categorie, cardsByCategories))
                  ? start + PAGE_SIZE
                  : start,
              )
            }
          />
        </CardsContent>
      </CardsInner>
    </Container>
  );
};

Cards.propTypes = propTypes;

const actions = { enhanceCards };

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

const mapStateToProps = state => ({
  classes: getClasses(state),
  cardBacks: getCardBacks(state),
  deathKnightCards: getDeathKnightCards(state),
  druidCards: getDruidCards(state),
  hunterCards: getHunterCards(state),
  mageCards: getMageCards(state),
  paladinCards: getPaladinCards(state),
  priestCards: getPriestCards(state),
  rogueCards: getRogueCards(state),
  shamanCards: getShamanCards(state),
  warlockCards: getWarlockCards(state),
  warriorCards: getWarriorCards(state),
});

const enhance = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withStateHandlers(
    ({
      initialStart = 0,
      initialCategorie = CARD_BACKS,
      initialDisplayCardPreview = false,
      initialCardPreview = {},
    }) => ({
      start: initialStart,
      categorie: initialCategorie,
      displayCardPreview: initialDisplayCardPreview,
      cardPreview: initialCardPreview,
    }),
    {
      handleChangeStart: () => newStart => ({
        start: newStart,
      }),
      handleChangeCategorie: () => newCategorie => ({
        categorie: newCategorie,
        start: 0,
      }),
      handleChangeDisplayCardsPreview: () => () => ({}),
    },
  ),
  lifecycle({
    componentDidUpdate(prevProps) {
      const {
        categorie,
        deathKnightCards,
        cardBacks,
        enhanceCards,
        druidCards,
        hunterCards,
        mageCards,
        paladinCards,
        priestCards,
        rogueCards,
        shamanCards,
        warlockCards,
        warriorCards,
      } = this.props;
      if (categorie === CARD_BACKS && isEmpty(cardBacks))
        loadCardBacks().then(cardBacks => enhanceCards({ cardBacks }));
      if (categorie === DEATH_KNIGHT && isEmpty(deathKnightCards))
        loadCardsByClass(DEATH_KNIGHT).then(deathKnightCards =>
          enhanceCards({ deathKnightCards }),
        );
      if (categorie === DRUID && isEmpty(druidCards))
        loadCardsByClass(DRUID).then(druidCards =>
          enhanceCards({ druidCards }),
        );
      if (categorie === HUNTER && isEmpty(hunterCards))
        loadCardsByClass(HUNTER).then(hunterCards =>
          enhanceCards({ hunterCards }),
        );
      if (categorie === MAGE && isEmpty(mageCards))
        loadCardsByClass(MAGE).then(mageCards => enhanceCards({ mageCards }));
      if (categorie === PALADIN && isEmpty(paladinCards))
        loadCardsByClass(PALADIN).then(paladinCards =>
          enhanceCards({ paladinCards }),
        );
      if (categorie === PRIEST && isEmpty(priestCards))
        loadCardsByClass(PRIEST).then(priestCards =>
          enhanceCards({ priestCards }),
        );
      if (categorie === ROGUE && isEmpty(rogueCards))
        loadCardsByClass(ROGUE).then(rogueCards =>
          enhanceCards({ rogueCards }),
        );
      if (categorie === SHAMAN && isEmpty(shamanCards))
        loadCardsByClass(SHAMAN).then(shamanCards =>
          enhanceCards({ shamanCards }),
        );
      if (categorie === WARLOCK && isEmpty(warlockCards))
        loadCardsByClass(WARLOCK).then(warlockCards =>
          enhanceCards({ warlockCards }),
        );
      if (categorie === WARRIOR && isEmpty(warriorCards))
        loadCardsByClass(WARRIOR).then(warriorCards =>
          enhanceCards({ warriorCards }),
        );
    },
  }),
);
export default enhance(Cards);
