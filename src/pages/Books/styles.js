import styled from 'styled-components';
import bgStripesImg from '@assets/bg_stripes.svg';
import buttonTrashImg from '@assets/button_trash.svg';
import buttonUpdateImg from '@assets/button_update.svg';
import buttonPrevImg from '@assets/button_prev.svg';
import buttonNewBookImg from '@assets/button_new_book.svg';
import buttonSaveImg from '@assets/button_save.svg';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  background: url(${bgStripesImg}) repeat-x center;
`;

export const LogoWrapper = styled.div`
  width: 150px;
  height: 150px;
  margin: 20px;
`;

export const Main = styled.main`
  width: 100%;
  background: var(--color-secondary);
  padding: 30px 0 60px;
`;

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  width: 100%;
  padding: 0 20px;

  td {
    text-align: center;
    vertical-align: middle;

    img {
      height: 50px;
    }
  }
`;

export const Heading = styled.h1`
  margin: 15px 0 30px;
`;

export const ButtonTrash = styled.button`
  background: url(${buttonTrashImg}) no-repeat center;
  background-size: contain;
  width: 30px;
  height: 30px;
`;

export const ButtonUpdate = styled.button`
  background: url(${buttonUpdateImg}) no-repeat center;
  background-size: contain;
  width: 30px;
  height: 30px;
`;

export const ButtonPrev = styled.button`
  background: url(${buttonPrevImg}) no-repeat center;
  background-size: contain;
  width: 30px;
  height: 30px;
`;

export const ButtonNew = styled.button`
  background: url(${buttonNewBookImg}) no-repeat center;
  background-size: contain;
  width: 206px;
  height: 50px;
  float: right;
  margin: -75px 0 0;
  margin-top: -75px;

  @media (max-width: 430px) {
    margin: 0 0 20px;
    float: none;
  }
`;

export const ButtonSave = styled.button`
  background: url(${buttonSaveImg}) no-repeat center;
  background-size: contain;
  width: 206px;
  height: 50px;
`;

export const InputGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  margin: 20px 0;
`;

export const Label = styled.label`
  font-size: 14px;
  color: var(--default-text-color);
  font-weight: bold;
  margin-bottom: 5px;
`;

export const ErrorMessage = styled.span`
  color: red;
  font-size: 12px;
  margin-top: 5px;
`;

export const BookOptions = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

export const Option = styled.div`
  border: 1px solid var(--border-color);
  padding: 5px; 
  margin: 0 15px 15px 0;

  label {
    display: flex;
    gap: 5px;
    align-items: center;
  }

  img {
    height: 50px;
  }
`;
