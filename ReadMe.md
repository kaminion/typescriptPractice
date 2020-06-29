### TypeScript

- 언어의 예측 가능
- 읽기 쉬운 코드
- 자바스크립트의 업그레이드 버전이라고 봐도 무방(정확히는 superset)
- tsconfig.json으로 타입스크립트 설정

### 의존성 패키지
일단 yarn으로 패키지를 설치하였다.
yarn add로 패키지 추가
- 타입스크립트의 경우 global로 추가, 컴파일 할 거라..
- typescript 
- tsc-watch --dev   (바꿀때마다 자동 컴파일)
- crypto-js (암호화)

### tsconfig

- target 어떤 버전의 자바스크립트 버전
- sourcemap tree에 포함할 것인지

### 사용법
- 변수명에 ?를 붙이면 Optional 객체가 됨, null이나 undefined가 들어갈 수 있음
- 타입은 number, string 등 : 소문자로 표기
- 함수의 경우 매개변수 다음에 : 를 써서 지정해줌
- object 넘기는 법으로는 사전에 interface를 정의해주어야한다. 그래서 call 하는 부분에서 interface를 타입으로 지정해주어야함.
- 클래스를 써야할 때는 react, express 등..을 쓸때..
- typescript는 import 사용함