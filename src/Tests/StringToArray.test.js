import { stringToArray } from 'Utils/stringToArray';

describe('Sting to Array', () => {
  test('단일 숫자 조합 배열', () => {
    expect(stringToArray('1,2,3,4')).toEqual([1, 2, 3, 4]);
  });
  test('문자열 끝에 공백이 포함 된 경우', () => {
    expect(stringToArray('1,2,3,4 ')).toEqual([1, 2, 3, 4]);
  });
  test('문자열 앞에 공백이 포함 된 경우', () => {
    expect(stringToArray(' 1,2,3,4')).toEqual([1, 2, 3, 4]);
  });
  test('배열 요소 중 숫자 앞에 공백이 포함된 경우', () => {
    expect(stringToArray('1, 2, 3, 4')).toEqual([1, 2, 3, 4]);
  });
  test('배열 요소 중 숫자 뒤에 공백이 포함된 경우', () => {
    expect(stringToArray('1 ,2 ,3 ,4')).toEqual([1, 2, 3, 4]);
  });
});
