import { inputRegEx } from 'Utils/regex';

describe('입력 정규표현식 TEST', () => {
  test('영어', () => {
    expect(inputRegEx.test('a')).toEqual(false);
  });
  test('영어 포함 문자열 1', () => {
    expect(inputRegEx.test('1A')).toEqual(false);
  });
  test('영어 포함 문자열 2', () => {
    expect(inputRegEx.test('1,2,3,4 a')).toEqual(false);
  });
  test('특수 문자', () => {
    expect(inputRegEx.test('!')).toEqual(false);
  });
  test('여러 dot을 포함한 문자열 1', () => {
    expect(inputRegEx.test('1,2,3,4,....')).toEqual(false);
  });
  test('여러 dot을 포함한 문자열 2', () => {
    expect(inputRegEx.test('...1,2,3,4,5,')).toEqual(false);
  });
  test('빈 공백 문자열', () => {
    expect(inputRegEx.test(' ')).toEqual(false);
  });
  test('공백 + 콤마로 구성된 문자열', () => {
    expect(inputRegEx.test(', , , , ,')).toEqual(false);
  });
  test('숫자 + 콤마로 구성된 문자열', () => {
    expect(inputRegEx.test('1,2,3,4')).toEqual(true);
  });
  test('숫자 + 콤마 + 공백 형식으로 구성된 문자열', () => {
    expect(inputRegEx.test('1, 2, 3, 4')).toEqual(true);
  });
  test('숫자 + 공백 + 콤마 형식으로 구성된 문자열', () => {
    expect(inputRegEx.test('1 ,2 ,3 ,4')).toEqual(true);
  });
  test('숫자 + 공백 + 콤마 + 공백', () => {
    expect(inputRegEx.test('1 , 2 , 3 , 4')).toEqual(true);
  });
});
