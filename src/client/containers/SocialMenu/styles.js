import styled from 'styled-components';

import BackgroundSocialMenuUI from '../../../../assets/UI/social_menu_background.png';

export const Container = styled.div`
  position: absolute;
  top: calc(50vh - 255px);
  left: ${({ active }) => (active ? 10 : -340)}px;
  background-image: url("${BackgroundSocialMenuUI}");
  background-repeat:no-repeat;
  background-size:cover;
  display: flex;
  width: 340px;
  height: 550px;
  z-index: 2500;
  transition: left 0.3s ease-in-out;
`;
