import styled from 'styled-components';

import bgStripesImg from '@assets/bg_stripes.svg';
import groundImg from '@assets/ground.svg';
import ladyImg from '@assets/lady.svg';

export const Main = styled.main`
  max-width: 100%;
  height: 100%;
  overflow-x: hidden;
`;

export const Wall = styled.div`
  width: 100%;
  height: 560px;
  background: url(${bgStripesImg}) repeat-x center;
  background-size: 820px;

  @media (max-width: 1330px) {
    height: 665px;
  }
  @media (max-width: 700px) {
    height: 600px;
  }
  @media (max-width: 600px) {
    height: 530px;
  }
  /* @media (max-width: 650px) {
    height: 500px;
  } */
  @media (max-width: 500px) {
    height: 450px;
  }
`;

export const WallContainer = styled.div`
  width: 100%;
  max-width: 1920px;
  align-items: center;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding: 120px 20px;

  @media (max-width: 1330px) {
    padding: 20px;
    justify-content: center;
  }
`;

export const ClockWrapper = styled.div`
  width: 258px;
  height: 274px;
  margin-top: 30px;
  margin-left: 172px;
  
  @media (max-width: 1650px) {
    margin-left: 0;
  }

  @media (max-width: 1330px) {
    display: none;
  }
`;

export const LogoWrapper = styled.div`
  width: 340px;
  height: 340px;
  margin-right: 80px;

  @media (max-width: 1650px) {
    margin-right: 0;
  }

  @media (max-width: 1475px) {
    width: 258px;
  }
`;

export const Ground = styled.div`
  width: 100%;
  height: 520px;
  position: relative;
  background: url(${groundImg}) repeat-x center;

  @media (max-width: 1330px) {
    height: 685px;
  }

  @media (max-width: 860px) {
    background-size: cover;
  }
`;

export const GroundContainer = styled.div`
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
`;

export const BookcaseWrapper = styled.div`
  width: 734px;
  max-width: 100%;
  height: 210px;
  position: relative;
  margin: 0 auto;

  @media (max-width: 450px) {
    height: 150px;
  }
  @media (max-width: 380px) {
    height: 100px;
  }
`;

export const BoardWrapper = styled.div`
  width: 702px;
  height: 320px;
  z-index: 2;
  margin: -64px 0 0 120px;

  @media (max-width: 1330px) {
    margin-top: 100px;
  }
  @media (max-width: 860px) {
    margin-left: 0;
  }
  @media (max-width: 740px) {
    width: 100%;
  }
  @media (max-width: 600px) {
    margin: 50px 0 0;
  }
`;

export const Lady = styled.div`
  width: 468px;
  height: 548px;
  margin-top: -494px;
  background: url(${ladyImg}) no-repeat center;
  background-size: contain;
  z-index: 5;

  @media (max-width: 1330px) {
    height: 470px;
    width: 400px;
    margin-top: -416px;
  }
  @media (max-width: 860px) {
    margin-left: -100px;
  }
  @media (max-width: 740px) {
    display: none;
  }
`;
