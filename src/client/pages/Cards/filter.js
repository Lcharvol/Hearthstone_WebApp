import { isNil, match, filter, length, toLower } from 'ramda';

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

const filterByMana = (cards, mana) => {
  if (isNil(mana)) return cards;
  return filter(
    card =>
      !isNil(card.cost)
        ? mana >= 7
          ? card.cost >= 7
          : mana === card.cost
        : false,
    cards,
  );
};

const filterBySearchValue = (cards, searchValue) => {
  const reg = new RegExp(toLower(searchValue));
  const matchWith = elem => {
    if (isNil(elem)) return false;
    return length(match(reg, toLower(elem))) > 0;
  };
  const matchSearch = card =>
    matchWith(card.name) || matchWith(card.rarity) || matchWith(card.text);
  if (length(searchValue) === 0) return cards;
  return filter(matchSearch, cards);
};

const getFilteredCards = (categorie, cards = [], manaFilter, searchValue) => {
  let ret = [];
  if (categorie === CARD_BACKS) ret = cards.cardBacks || [];
  else if (categorie === DEATH_KNIGHT) ret = cards.deathKnightCards || [];
  else if (categorie === DRUID) ret = cards.druidCards || [];
  else if (categorie === HUNTER) ret = cards.hunterCards || [];
  else if (categorie === MAGE) ret = cards.mageCards || [];
  else if (categorie === PALADIN) ret = cards.paladinCards || [];
  else if (categorie === PRIEST) ret = cards.priestCards || [];
  else if (categorie === ROGUE) ret = cards.rogueCards || [];
  else if (categorie === SHAMAN) ret = cards.shamanCards || [];
  else if (categorie === WARLOCK) ret = cards.warlockCards || [];
  else if (categorie === WARRIOR) ret = cards.warriorCards || [];
  else if (categorie === NEUTRAL) ret = cards.neutralCards || [];
  return filterBySearchValue(filterByMana(ret, manaFilter), searchValue);
};

export default getFilteredCards;
