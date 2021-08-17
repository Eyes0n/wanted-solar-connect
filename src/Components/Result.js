import React from 'react';
import styled from 'styled-components';
import { SORT } from 'Utils';

const Result = ({ value, type }) => {
  return (
    <Wrapper>
      <span>{type === SORT.ASC ? '오름차순 정렬' : '내림차순 정렬'}</span>
      <p>{value || '숫자를 입력해주세요.'}</p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  margin-bottom: 20px;
  padding: 0px 32px;

  p {
    padding: 32px 10px;
    border: 1px solid ${({ theme }) => theme.color.gray};
    border-radius: 4px;
  }

  span {
    position: absolute;
    top: 10px;
    left: 42px;
    font-size: 12px;
  }
`;

export default Result;
