import React from 'react';
import styled from 'styled-components';

const Error = ({ isError }) => {
  return (
    <>
      {isError && (
        <ErrorMessage>잘못된 입력값입니다. 다시 확인해주세요.</ErrorMessage>
      )}
    </>
  );
};

const ErrorMessage = styled.p`
  margin: 10px auto;
  color: ${({ theme }) => theme.color.red};
`;

export default Error;
