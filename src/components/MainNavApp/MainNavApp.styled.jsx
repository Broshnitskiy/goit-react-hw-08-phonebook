import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  list-style: none;
  padding: 10px;
  border-bottom: 1px solid black;
`;

export const Link = styled(NavLink)`
  font-size: 20px;
  margin-right: 20px;
  &.active {
    color: red;
    border: 1px dashed;
  }
  &:hover {
    color: blue;
  }
`;
