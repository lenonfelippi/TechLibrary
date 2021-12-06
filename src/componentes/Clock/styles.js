import styled from 'styled-components';
import clockBaseImg from '@assets/clock_base.svg';

export const Clock = styled.div`
  width: 258px;
  height: 274px;
  background-image: url(${clockBaseImg});
`;

export const ClockHands = styled.div`
  width: 100%;
  height: 100%;
  padding-left: 50%;
  padding-top: 50%;
  position: relative;
`;

export const HourHand = styled.div`
  position: absolute;
  transform-origin: bottom;
  transform: rotate(${props => props.rotate}deg);
  top: 70px;
  height: 60px;
  width: 7px;
  background-color: var(--color-primary);
`;
export const MinuteHand = styled.div`
  position: absolute;
  transform-origin: bottom;
  transform: rotate(${props => props.rotate}deg);
  top: 30px;
  height: 100px;
  width: 7px;
  background-color: var(--color-secondary);
`;
export const SecondsHand = styled.div`
  position: absolute;
  transform-origin: bottom;
  transform: rotate(${props => props.rotate}deg);
  top: 30px;
  height: 100px;
  width: 3px;
  background-color: #F00;
`;
