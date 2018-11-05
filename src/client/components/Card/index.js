import React from 'react';
import { string, number, bool, func, oneOfType } from 'prop-types';
import { onlyUpdateForKeys } from 'recompose';
import DefaultCardBack from '../../../../assets/UI/default_card_back.png';

import { Container, StyledImg, ImageContainer, StyledBackCard } from './styles';

const propTypes = {
  imgAnimated: string,
  img: string,
  top: number,
  left: number,
  reversible: bool,
  handleChangeCardStatus: func,
  cardId: oneOfType([number, string]),
};

const Card = ({
  imgAnimated,
  img,
  imgGold,
  top = 0,
  left = 0,
  reversible = false,
  showSide = 'front',
  handleChangeCardStatus = () => {},
  cardId = 0,
}) => (
  <Container top={top} left={left}>
    <ImageContainer displayImg={showSide === 'front'}>
      <StyledImg src={imgAnimated || img || imgGold} />
    </ImageContainer>
    <ImageContainer displayImg={showSide === 'back'}>
      <StyledImg
        src={DefaultCardBack}
        onClick={() => handleChangeCardStatus(cardId)}
      />
    </ImageContainer>
  </Container>
);

Card.propTypes = propTypes;

export default onlyUpdateForKeys(['top', 'left', 'img', 'showSide'])(Card);
