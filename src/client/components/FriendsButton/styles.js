import styled from 'styled-components';

import FriendsButtonUI from '../../../../assets/UI/friends_button.png';

export const Container = styled.div`
    position:fixed;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background-image: url("${FriendsButtonUI}");
    width:125px;
    height:55px;
    top:20px;
    left:20px;
`;

export const FriendsCount = styled.div`
  color: white;
  margin-right: 25px;
  font-size: 0.6em;
`;
