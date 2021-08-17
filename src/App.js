import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { inputRegEx, stringToArray, bubbleSort, SORT } from 'Utils';
import Timer from 'Components/Timer';
import InputNums from 'Components/InputNums';
import Result from 'Components/Result';
import Error from 'Components/Error';

const App = () => {
  const [inputTxt, setInputTxt] = useState('');
  const [inputError, setInputError] = useState(false);
  const [ascend, setAscend] = useState('');
  const [descend, setDescend] = useState('');
  const btnRef = useRef();
  const inputRef = useRef();

  const inputValidator = (str) => setInputError(!inputRegEx.test(str));

  const onInputChange = (e) => {
    setInputTxt(e.target.value);
    inputValidator(e.target.value);
  };

  const onInputKeyPress = (e) => {
    if (e.key === 'Enter') {
      onSort();
    }
  };

  const onSort = () => {
    const target = stringToArray(inputTxt);

    setAscend('Loading...');
    setDescend('Loading...');

    new Promise((resolve, _reject) => {
      setAscend(bubbleSort(target, 'asc').join(', '));
      btnRef.current.disabled = true;
      inputRef.current.disabled = true;
      setTimeout(() => {
        resolve();
      }, 3000);
    }).then(() => {
      setDescend(bubbleSort(target, 'desc').join(', '));
      btnRef.current.disabled = false;
      inputRef.current.disabled = false;
    });
  };

  const onClear = () => {
    setInputTxt('');
    setAscend('');
    setDescend('');
  };

  return (
    <Wrapper>
      <MainContainer>
        <Timer type="KR" />

        <InputNums
          value={inputTxt}
          ref={inputRef}
          onChange={onInputChange}
          onKeyPress={onInputKeyPress}
        />

        <Error isError={inputError} />

        <BtnWrapper>
          <StartButton
            type="button"
            ref={btnRef}
            disabled={inputError}
            onClick={onSort}>
            시작 버튼
          </StartButton>
          <InitButton type="button" onClick={onClear}>
            초기화 버튼
          </InitButton>
        </BtnWrapper>

        <Result type={SORT.ASC} value={ascend} />
        <Result type={SORT.DESC} value={descend} />

        <Timer type="US" />
      </MainContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${({ theme }) => theme.color.gray};
`;

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 500px;
  border-radius: 16px;
  background: white;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.04);
`;

const BtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 32px;
`;
const StartButton = styled.button`
  margin: 20px 10px;
  padding: 10px 10px;
  border: 1px solid #f0f8ff;
  border-radius: 8px;
  font-size: 16px;
  color: white;
  background-color: ${({ theme }) => theme.color.blue};

  &:hover {
    background-color: ${({ theme }) => theme.color.darkBlue};
  }

  &:disabled {
    border: 1px solid rgba(0, 0, 255, 0.1);
    background-color: ${({ theme }) => theme.color.red};
    cursor: default;
  }
`;

const InitButton = styled(StartButton)``;

export default App;
