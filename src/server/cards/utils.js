import { filter } from 'ramda';

const isCollectible = card => card.collectible;

export const removeNotCollectibleCards = cards => filter(isCollectible, cards);
