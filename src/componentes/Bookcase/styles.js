import styled from 'styled-components';

import bookcaseImg from '@assets/bookcase.svg';
import shadowImg from '@assets/shadow.svg';

export const Content = styled.div`
  width: 100%;
  height: 560px;
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: url(${bookcaseImg}) no-repeat bottom right;

  &::before {
    content: '';
    position: absolute;
    width: 210px;
    height: 198px;
    bottom: 10px;
    right: -210px;
    background: url(${shadowImg}) no-repeat left;
    background-size: contain;
    
    @media (max-width: 450px) {
      height: 150px;
    }
    @media (max-width: 380px) {
      height: 100px;
    }
  }

  @media (max-width: 760px) {
    height: 540px;
  }
  @media (max-width: 740px) {
    height: 526px;
  }
  @media (max-width: 560px) {
    height: 463px;
  }
  @media (max-width: 540px) {
    height: 449px;
  }
  @media (max-width: 520px) {
    height: 434px;
  }
  @media (max-width: 420px) {
    height: 280px;
  }
  @media (max-width: 400px) {
    height: 264px;
  }
  @media (max-width: 380px) {
    height: 249px;
  }
  @media (max-width: 360px) {
    height: 234px;
  }
  @media (max-width: 340px) {
    height: 218px;
  }
  @media (max-width: 320px) {
    height: 204px;
  }
`;

export const Shelf = styled.div.attrs(props => ({
  ref: props.ref,
  ...props.attributes,
}))`
  width: calc(100% - 100px);
  height: 160px;
  display: flex;
  background: ${props => props.isDraggingOver ? 'rgba(20, 0, 0, 0.1)' : 'transparent'};
  justify-content: ${props => props.reverse ? 'flex-end' : 'flex-start'};

  &:first-child {
    margin-top: 115px;
  }
  &:last-child {
    margin-top: 65px;
  }

  @media (max-width: 780px) {
    height: 130px;
    width: calc(100% - 90px);

    &:first-child {
      margin-top: 132px;
    }
    &:last-child {
      margin-top: 80px;
    }
  }
  @media (max-width: 640px) {
    height: 100px;
    width: calc(100% - 80px);

    &:first-child {
      margin-top: 170px;
    }
  }
  @media (max-width: 560px) {
    height: 100px;
    width: calc(100% - 65px);

    &:first-child {
      margin-top: 170px;
    }
    &:last-child {
      margin-top: 40px;
    }
  }
  @media (max-width: 500px) {
    height: 80px;
    width: calc(100% - 55px);

    &:first-child {
      margin-top: 180px;
    }
    &:last-child {
      margin-top: 50px;
    }
  }
  @media (max-width: 420px) {
    height: 65px;
    width: calc(100% - 48px);

    &:first-child {
      margin-top: 70px;
    }
    &:last-child {
      margin-top: 50px;
    }
  }
  @media (max-width: 400px) {
    height: 65px;
    width: calc(100% - 46px);

    &:first-child {
      margin-top: 70px;
    }
    &:last-child {
      margin-top: 40px;
    }
  }
  @media (max-width: 380px) {
    height: 60px;
    width: calc(100% - 45px);

    &:first-child {
      margin-top: 60px;
    }
    &:last-child {
      margin-top: 40px;
    }
  }
  @media (max-width: 360px) {
    &:last-child {
      margin-top: 35px;
    }
  }
  @media (max-width: 340px) {
    width: calc(100% - 40px);

    &:first-child {
      margin-top: 50px;
    }
    &:last-child {
      margin-top: 30px;
    }
  }
  @media (max-width: 320px) {
    width: calc(100% - 35px);

    &:first-child {
      margin-top: 45px;
    }
    &:last-child {
      margin-top: 20px;
    }
  }
`;

export const Book = styled.div.attrs(props => ({
  ref: props.ref,
  ...props.attributes,
}))`
  height: 100%;
  padding: 0 1px;
  user-select: none;

  img {
    height: 100%;
  }
`;
