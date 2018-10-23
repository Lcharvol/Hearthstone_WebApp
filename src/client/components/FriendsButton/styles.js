import styled from 'styled-components';

import FriendsButtonUI from '../../../../assets/UI/friends_button.png';

export const Container = styled.div`
    position:fixed;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background-image: url("${FriendsButtonUI}");
    background-size:cover;
    width:105px;
    height:45px;
    top:20px;
    left:20px;
    z-index:1000;
`;

export const FriendsCount = styled.div`
  color: white;
  margin-right: 25px;
  font-size: 0.6em;
`;
