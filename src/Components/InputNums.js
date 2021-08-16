import React, { forwardRef } from 'react';
import styled from 'styled-components';

const InputNums = forwardRef(({ value, onChange, onKeyPress }, ref) => {
  return (
    <Wrapper>
      <label htmlFor="input">숫자 입력 :</label>
      <input
        id="input"
        ref={ref}
        disabled={false}
        placeholder="숫자를 입력해주세요."
        value={value}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
    </Wrapper>
  );
});

const Wrapper = styled.div`
  display: flex;
  margin-top: 20px;

  label {
    margin-left: 32px;
    padding: 12px 0;
  }

  input {
    flex: 1;
    padding: 12px;
    margin-left: 12px;
    margin-right: 32px;
    border: 1px solid ${({ theme }) => theme.color.gray};
    border-radius: 4px;

    &::placeholder {
      color: ${({ theme }) => theme.color.gray};
    }
  }
`;

export default InputNums;
