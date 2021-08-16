import React, { useState, useEffect } from 'react';
import { dateLocalFunc } from 'Utils/date';

const Timer = ({ type }) => {
  const [date, setDate] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [date]);

  // local ? ko-KR : en-US 에 따른 조건 처리
  return <div>{dateLocalFunc(date, type)}</div>;
};

export default Timer;
