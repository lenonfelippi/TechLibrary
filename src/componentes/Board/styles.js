import styled from 'styled-components';
import boardImg from '@assets/board.svg';
import boardMobileImg from '@assets/board_mobile.svg';
import buttonImg from '@assets/button.svg';
import buttonBookmarkImg from '@assets/button_book_maker.svg';

export const Board = styled.div`
  background: url(${boardImg}) no-repeat center;
  background-size: contain;
  width: 702px;
  height: 320px;
  display: flex;
  flex-direction: row-reverse;

  @media (max-width: 740px) {
    width: 100%;
    justify-content: center;
    align-items: center;
    background: url(${boardMobileImg}) no-repeat center;
  }
  @media (max-width: 500px) {
    height: 263px
  }
  @media (max-width: 480px) {
    height: 250px
  }
  @media (max-width: 420px) {
    height: 215px
  }
  @media (max-width: 380px) {
    height: 190px;
  }
  @media (max-width: 340px) {
    height: 168px;
  }
`;

export const Content = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px 20px;

  @media (max-width: 740px) {
    width: 70%;
  }

  @media (max-width: 640px) {
    width: 90%;
  }
`;

export const Heading = styled.h1`
  color: var(--heading-color);
  text-align: center;
  margin-bottom: 10px;
  letter-spacing: 8px;
  font-weight: 400;
  font-size: 18px;
  line-height: 18px;
`;

export const RadioButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const Divider = styled.div`
  width: 90%;
  height: 8px;
  background: var(--border-color);
  margin: 20px 0;

  @media (max-width: 640px) {
    margin: 10px 0;
    height: 3px;
  }
  @media (max-width: 350px) {
    margin: 5px 0;
    height: 3px;
  }
`;

export const ButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  a {
    width: 80px;
    height: 80px;
    background: url(${buttonBookmarkImg}) no-repeat center;
    background-size: contain;
    margin-left: 10px;

    @media (max-width: 640px) {
      width: 50px;
      height: 50px;
    }
  }
`;

export const OrganizeButton = styled.button.attrs(props => ({
  disabled: !props.order,
}))`
  background: url(${buttonImg}) no-repeat center;
  background-size: contain;
  height: 80px;
  width: 330px;

  &:disabled {
    opacity: 0.5;
  }

  @media (max-width: 640px) {
    height: 50px;
    width: 210px;
  }
`;
