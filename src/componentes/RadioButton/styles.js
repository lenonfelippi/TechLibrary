import styled from 'styled-components';

import buttonActiveImage from '@assets/filter_button_active.svg';
import buttonImage from '@assets/filter_button.svg';

export const Button = styled.button`
  background: url(${props => props.selected ? buttonActiveImage : buttonImage}) no-repeat center;
  background-size: contain;
  width: 74px;
  height: 83px;

  img { 
    margin-top: ${props => props.selected ? '10px' : '0'};
    max-width: 36px;
    max-height: 36px;
  }

  @media (max-width: 480px) {
    width: 47px;
    height: 50px;

    img {
      max-width: 20px;
      max-height: 20px;
    }
  }
`;
