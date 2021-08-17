# Solar Connect - Sorting Machine

## [🔗 배포 링크](https://sorting-machine.netlify.app)

## 팀원
- 🧏‍♂️박현찬
- 🧏‍♀️이다은
## 구현 기능

- Timer 기능
- 정규식을 사용한 Input 입력 유효성 검사
- 입력창 & 결과 필드 초기화 기능
- 오름차순/내림차순 정렬 기능
- 오름차순 출력 3초 후 내림차순 출력 기능
- sort 기능 시작 시 입력창 입력 불가 & 시작 버튼 비활성화 기능

## 테스트

![image](https://user-images.githubusercontent.com/45257139/129682908-57e7f3ca-661c-418a-8891-16ae9cc0caf9.png)

`Regex.test.js`

- 정규표현식 테스트 실행
- 숫자, 콤마, 공백 외 문자에 대한 예외처리 확인
- 숫자, 콤마, 공백 조합에 따른 테스트 실행

`Sort.test.js`

- 오름차순 테스트 실행
- 내림차순 테스트 실행

`StringToArray.test.js`

- 숫자, 콤마, 공백 조합에 따른 테스트 실행

## 설치 및 시작 방법

```js
- git clone https://github.com/Eyes0n/wanted-solar-connect.git
- cd wanted-solar-connect
- npm install
- npm start
```

## 참고 사이트

[🔗 MDN - Date.prototype.toLocaleString()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString)

[🔗 Bubble Sort Algorithm](https://stackabuse.com/bubble-sort-and-cocktail-shaker-sort-in-javascript/)
