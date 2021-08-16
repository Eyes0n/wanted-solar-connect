import React from 'react';
import styled from 'styled-components';

const Result = ({ value }) => {
  return (
    <Wrapper>
      <p>{value || '숫자를 입력해주세요.'}</p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-bottom: 20px;
  padding: 0px 32px;

  p {
    padding: 32px 10px;
    border: 1px solid ${({ theme }) => theme.color.gray};
    border-radius: 4px;
  }
`;

export default Result;
