import { InputStyled, LabelStyled } from './Filter.style';

export const Filter = ({ value, changeFilter }) => {
  return (
    <LabelStyled>
      Search
      <InputStyled type="text" value={value} onChange={changeFilter} />
    </LabelStyled>
  );
};
