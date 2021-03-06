import React from 'react';
import { map, length, isEmpty, equals, filter, isNil } from 'ramda';
import { number, func, array, string } from 'prop-types';
import { compose, withStateHandlers, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  Container,
  CardsInner,
  CardsContent,
  CardsNavigation,
  ManaCrystalsContainer,
  ClassIcons,
  PaperBackground,
} from './styles';
import { HOME } from '../../constants/router';
import Card from '../../components/Card';
import ClassIcon from '../../components/ClassIcon';
import Arrow from '../../components/Arrow';
import Borders from '../../components/Borders';
import SearchBar from '../../components/SearchBar';
import ManaCristals from '../../containers/ManaCristals';
import { LEFT, RIGHT } from '../../components/Arrow/constants';
import getFilteredCards from './filter';
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
  getNeutralCards,
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
  NEUTRAL,
} from './constants';
import { CARD_WIDTH, CARD_HEIGHT } from '../../constants/card';

const propTypes = {
  top: number.isRequired,
  modifyLocation: func.isRequired,
  cardBacks: array.isRequired,
  classes: array,
  categorie: string.isRequired,
  handleChangeCategorie: func.isRequired,
  width: number.isRequired,
  height: number.isRequired,
  searchValue: string.isRequired,
  updateWindowDimensions: func.isRequired,
  handleChangeManaFilter: func.isRequired,
  handleChangeSearchValue: func.isRequired,
  manaFilter: number,
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
  width,
  height,
  searchValue,
  updateWindowDimensions,
  handleChangeManaFilter,
  handleChangeSearchValue,
  lineSize,
  columnSize,
  manaFilter,
  ...cardsByCategories
}) => {
  const pageSize = lineSize * columnSize;
  const containerWidth =
    Math.floor(width / 100) * 100 - 100 <= 1200
      ? Math.floor(width / 100) * 100 - 100
      : 1200;
  const isArrowActive = (direction, start, length) => {
    if (equals(direction, RIGHT)) return start + pageSize < length;
    if (equals(direction, LEFT)) return start - pageSize >= 0;
  };
  const filteredCards = getFilteredCards(
    categorie,
    cardsByCategories,
    manaFilter,
    searchValue,
  );
  return (
    <Container
      top={top}
      onClick={() => {
        setTimeout(() => handleChangeCategorie(CARD_BACKS), 700);
        modifyLocation(HOME);
      }}
    >
      <CardsInner onClick={e => e.stopPropagation()}>
        <PaperBackground />
        <Borders />
        <SearchBar
          searchValue={searchValue}
          handleChangeSearchValue={handleChangeSearchValue}
        />
        <ClassIcons>
          {[CARD_BACKS, ...classes].map((elem, id) => (
            <ClassIcon
              key={id}
              elem={elem}
              selected={elem === categorie}
              handleChangeCategorie={handleChangeCategorie}
            />
          ))}
        </ClassIcons>
        {categorie !== CARD_BACKS && (
          <ManaCrystalsContainer>
            <ManaCristals
              manaFilter={manaFilter}
              handleChangeManaFilter={handleChangeManaFilter}
            />
          </ManaCrystalsContainer>
        )}
        <CardsContent>
          <Arrow
            direction={LEFT}
            active={isArrowActive(LEFT, start, length(filteredCards))}
            action={() =>
              handleChangeStart(start - pageSize < 0 ? 0 : start - pageSize)
            }
          />
          <CardsNavigation
            start={start}
            lineSize={lineSize}
            columnSize={columnSize}
          >
            {filteredCards.map(
              (card, id) =>
                id >= start - 2 * pageSize &&
                id <= start + 2 * pageSize && (
                  <Card
                    key={id}
                    top={Math.floor((id % pageSize) / lineSize) * CARD_HEIGHT}
                    left={
                      (id % lineSize) * CARD_WIDTH +
                      Math.floor(id / pageSize) * (containerWidth + 100) -
                      Math.floor(start / pageSize) * (containerWidth + 100)
                    }
                    {...card}
                  />
                ),
            )}
          </CardsNavigation>
          <Arrow
            direction={RIGHT}
            active={isArrowActive(RIGHT, start, length(filteredCards))}
            action={() =>
              handleChangeStart(
                start + pageSize < length(filteredCards)
                  ? start + pageSize
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
  neutralCards: getNeutralCards(state),
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
      initialManaFilter = null,
      initialSearchValue = '',
    }) => ({
      start: initialStart,
      categorie: initialCategorie,
      displayCardPreview: initialDisplayCardPreview,
      cardPreview: initialCardPreview,
      width: 0,
      height: 0,
      lineSize: 0,
      columnSize: 2,
      manaFilter: initialManaFilter,
      searchValue: initialSearchValue,
    }),
    {
      handleChangeStart: () => newStart => ({
        start: newStart,
      }),
      handleChangeCategorie: () => newCategorie => ({
        categorie: newCategorie,
        start: 0,
        manaFilter: null,
      }),
      handleChangeDisplayCardsPreview: () => () => ({}),
      handleChangeManaFilter: () => newManaFilter => ({
        manaFilter: newManaFilter,
        start: 0,
      }),
      updateWindowDimensions: () => () => ({
        width: window.innerWidth,
        height: window.innerHeight,
      }),
      updateLineSize: () => newLineSize => ({ lineSize: newLineSize }),
      updateColumnSize: () => newColumnSize => ({ columnSize: newColumnSize }),
      handleChangeSearchValue: () => newSearchValue => ({
        searchValue: newSearchValue,
        start: 0,
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
        neutralCards,
        width,
        height,
        updateLineSize,
        updateColumnSize,
        lineSize,
        columnSize,
      } = this.props;
      if (width !== prevProps.width) {
        if (width >= 1200) {
          if (lineSize !== 5) updateLineSize(5);
        } else if (width >= 1000) {
          if (lineSize !== 4) updateLineSize(4);
        } else if (width >= 800) {
          if (lineSize !== 3) updateLineSize(3);
        } else if (width >= 600) {
          if (lineSize !== 2) updateLineSize(2);
        } else if (lineSize !== 1) updateLineSize(1);
      }
      if (height !== prevProps.height) {
        if (height >= 1200) {
          if (columnSize !== 3) updateColumnSize(3);
        } else if (height >= 900) {
          if (columnSize !== 2) updateColumnSize(2);
        } else if (columnSize !== 1) updateColumnSize(1);
      }
      if (categorie !== prevProps.categorie) {
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
        if (categorie === NEUTRAL && isEmpty(neutralCards)) {
          loadCardsByClass(NEUTRAL).then(neutralCards =>
            enhanceCards({ neutralCards }),
          );
        }
      }
    },
    componentDidMount() {
      const {
        updateWindowDimensions,
        categorie,
        cardBacks,
        enhanceCards,
      } = this.props;
      updateWindowDimensions();
      window.addEventListener('resize', updateWindowDimensions);
      if (categorie === CARD_BACKS && isEmpty(cardBacks))
        loadCardBacks().then(cardBacks => enhanceCards({ cardBacks }));
    },
    componentWillUnmount() {
      window.removeEventListener('resize', this.props.updateWindowDimensions);
    },
  }),
);
export default enhance(Cards);
