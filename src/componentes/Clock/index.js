import * as S from './styles';
import { useEffect, useState } from "react";

const date = new Date();

export const Clock = () => {
  const [time, setTime] = useState({
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds(),
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();

      setTime({
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds()
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const convertToDeg = (value, type) => {
    const base = ['minutes', 'seconds'].includes(type) ? 60 : 12;

    return (360 / base) * value;
  };

  return (
    <S.Clock>
      <S.ClockHands>
        <S.HourHand rotate={convertToDeg(time.hours, 'hours')} />
        <S.MinuteHand rotate={convertToDeg(time.minutes, 'minutes')} />
        <S.SecondsHand rotate={convertToDeg(time.seconds, 'seconds')} />
      </S.ClockHands>
    </S.Clock>
  );
}
