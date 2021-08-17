import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { inputRegEx } from 'Utils/regex';
import { bubbleSort } from 'Utils/sort';
import Timer from 'Components/Timer';
import InputNums from 'Components/InputNums';
import Result from 'Components/Result';
import Error from 'Components/Error';

const App = () => {
  const [inputTxt, setInputTxt] = useState('');
  const [inputValidator, setInputValidator] = useState(false);
  const [ascend, setAscend] = useState('');
  const [descend, setDescend] = useState('');
  const btnRef = useRef();
  const inputRef = useRef();

  useEffect(() => {
    !inputRegEx.test(inputTxt)
      ? setInputValidator(true)
      : setInputValidator(false);
  }, [inputTxt]);

  const onInputChange = (e) => {
    setInputTxt(e.target.value);
  };

  const onInputKeyPress = (e) => {
    if (e.key === 'Enter') {
      onSort();
    }
  };

  const onSort = () => {
    const target = inputTxt
      .trim()
      .split(',')
      .map((str) => parseInt(str));

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

        <Error isError={inputTxt && inputValidator} />

        <BtnWrapper>
          <StartButton
            type="button"
            ref={btnRef}
            disabled={inputValidator}
            onClick={onSort}>
            시작 버튼
          </StartButton>
          <InitButton type="button" onClick={onClear}>
            초기화 버튼
          </InitButton>
        </BtnWrapper>

        <Result type="asc" value={ascend} />
        <Result type="desc" value={descend} />
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
