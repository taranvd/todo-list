import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 12px 16px;
  border: 1px solid black;
  width: 600px;
`;

export const TextArea = styled.textarea`
  line-height: 16px;
  padding: 12px 16px;
  margin-bottom: 20px;
  width: 100%;
  resize: none;
`;

export const Button = styled.button`
  width: 100%;
  background-color: indigo;
  padding: 13px 0;
  border: none;
  border-radius: 5px;
  color: white;
  text-transform: uppercase;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: indigo;
  }

  &:active {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  }
`;
