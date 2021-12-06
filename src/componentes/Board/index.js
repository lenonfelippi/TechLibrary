import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLibrary } from '@contexts/LibraryContext';
import { RadioButton } from '@componentes/RadioButton';

import * as S from './styles';

import filterAlphabeticImg from '@assets/filter_alphabetic.svg';
import filterColorsImg from '@assets/filter_colors.svg';
import filterSizesImg from '@assets/filter_sizes.svg';
import filterDateImg from '@assets/filter_date.svg';

const orderingOptions = [
  {
    id: 'alphabetic',
    image: filterAlphabeticImg,
    label: 'Sort alphabetically',
  },
  {
    id: 'colors',
    image: filterColorsImg,
    label: 'Sort by color',
  },
  {
    id: 'size',
    image: filterSizesImg,
    label: 'Sort by size',
  },
  {
    id: 'date',
    image: filterDateImg,
    label: 'Ordenar por data de lançamento',
  },
];

export const Board = () => {
  const { handleSort } = useLibrary();
  const [order, setOrder] = useState('');

  return (
    <S.Board>
      <S.Content>
        <S.Heading>SORT BY</S.Heading>
        <S.RadioButtonsWrapper>
          {orderingOptions.map((item) => (
            <RadioButton value={item.id} setOrder={setOrder} selected={order === item.id} key={item.id}>
              <img src={item.image} alt={item.label} />
            </RadioButton>
          ))}
        </S.RadioButtonsWrapper>
        <S.Divider />
        <S.ButtonsWrapper>
          <S.OrganizeButton onClick={() => handleSort(order)} order={order} />
          <Link to="/books"></Link>
        </S.ButtonsWrapper>
      </S.Content>
    </S.Board>
  );
}
