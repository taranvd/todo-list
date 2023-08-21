import styled, { css } from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  list-style: none;
  padding: 0;
  width: 600px;
`;

export const ItemList = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 30px;
  padding: 5px 15px;

  border: 1px solid black;
  ${props =>
    props['data-iscompleted'] === 'true' &&
    css`
      background-color: rgb(60, 179, 113);
      text-decoration: line-through;
      opacity: 0.6;
    `}
`;

export const Button = styled.button`
  margin: 0;
  cursor: pointer;
  background: none;
  border: none;
  height: 30px;

  svg {
    height: 20px;
    width: 20px;
  }
`;
