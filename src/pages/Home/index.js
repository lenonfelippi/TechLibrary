import { Clock } from '@componentes/Clock';
import { Board } from '@componentes/Board';
import { Logo } from '@componentes/Logo';
import { Bookcase } from '@componentes/Bookcase';

import * as S from './styles';

export const PageHome = () => (
  <S.Main>
    <S.Wall>
      <S.WallContainer>
        <S.ClockWrapper>
          <Clock />
        </S.ClockWrapper>
        <S.LogoWrapper>
          <Logo />
        </S.LogoWrapper>
      </S.WallContainer>
    </S.Wall>

    <S.Ground>
      <S.GroundContainer>
        
        <S.BookcaseWrapper>
          <Bookcase />
        </S.BookcaseWrapper>

        <S.BoardWrapper>
          <Board />
        </S.BoardWrapper>

        <S.Lady />
      </S.GroundContainer>
    </S.Ground>
  </S.Main>
)
