import * as S from './styles';

export const RadioButton = ({ selected, value, setOrder, children }) => (
  <S.Button selected={selected} onClick={() => setOrder(value)}>
    {children}
  </S.Button>
)
