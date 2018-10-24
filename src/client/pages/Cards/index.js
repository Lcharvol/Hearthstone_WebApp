import React from 'react';
import { map, isEmpty } from 'ramda';
import { number, func, array, string } from 'prop-types';
import { compose, withStateHandlers, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Container, CardsInner, CardsNavigation, CardsHeader } from './styles';
import { HOME } from '../../constants/router';
import Card from '../../components/Card';
import ClassIcon from '../../components/ClassIcon';
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
} from './constants';

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
}) => (
  <Container top={top} onClick={() => modifyLocation(HOME)}>
    <CardsInner onClick={e => e.stopPropagation()}>
      <CardsHeader>
        {classes.map((elem, id) => (
          <ClassIcon
            key={id}
            elem={elem}
            selected={elem === categorie}
            handleChangeCategorie={handleChangeCategorie}
          />
        ))}
      </CardsHeader>
      <CardsNavigation>
        {getCardsByCategorie(categorie, cardsByCategories).map((card, id) => (
          <Card key={id} {...card} />
        ))}
      </CardsNavigation>
    </CardsInner>
  </Container>
);

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
