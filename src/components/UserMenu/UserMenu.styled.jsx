import styled from 'styled-components';

export const Link = styled.div`
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
