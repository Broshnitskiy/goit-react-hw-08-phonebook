import styled from 'styled-components';

export const ListItem = styled.li`
  margin-top: 30px;
  margin-left: 30px;
  flex-basis: calc(100% / 4 - 30px);

  button {
    display: block;
    min-width: 80px;
    cursor: pointer;
    :hover {
      color: white;
      background-color: orangered;
    }
  }
`;
