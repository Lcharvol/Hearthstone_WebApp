import styled from 'styled-components';

import BackgroundSocialMenuUI from '../../../../assets/UI/social_menu_background.png';

export const Container = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 340px;
  height: 550px;
  top: calc(50vh - 255px);
  left: ${({ active }) => (active ? 10 : -340)}px;
  background-image: url("${BackgroundSocialMenuUI}");
  background-repeat:no-repeat;
  background-size:cover;
  z-index: 2500;
  transition: left 0.3s ease-in-out;
`;

export const Content = styled.div`
  position: relative;
  width: calc(100% - 56px);
  height: calc(100% - 95px);
  padding-left: 22px;
  padding-right: 34px;
  padding-top: 15px;
`;

export const Friends = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;
