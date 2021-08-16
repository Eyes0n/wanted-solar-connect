import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { dateLocalFunc } from 'Utils/date';

const Timer = ({ type }) => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Wrapper type={type}>
      <h2>{dateLocalFunc(date, type)}</h2>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 48px 32px;
  border-bottom: ${({ type, theme }) =>
    type === 'KR' && `1px solid ${theme.color.lightGray}`};

  border-top: ${({ type, theme }) =>
    type === 'US' && `1px solid ${theme.color.lightGray}`};

  h2 {
    font-size: 20px;
    font-weight: 700;
    color: ${({ theme }) => theme.color.black};
  }
`;

export default Timer;
