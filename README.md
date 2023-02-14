# **프로젝트 소개 -COVID-19 BOARD 빈스미디어 실기과제 프로젝트 입니다.**

<br>
<br>

## 과제 설명

- 메인화면에서 전세계 코로나 실시간 데이터 가져와서 보이게 함
- 아래에는 코로나 데이터 차트로 가져오기
- 메인 상단 navbar에서 아이콘 클릭시 지역 설정할 수 있는 창 뜸
- 나라 리스트에서 특정 국가 검색 기능
- 메인페이지 하단에 예방 방법 페이지 버튼 클릭시 페이지 이동
- 각 항목 클릭시 아코디언 ui 구현
- 예방방법 페이지 navbar 아이콘 클릭시 전페이지 이동

<br>
<br>

## **언어**

> JavaScript
> React.js

## **라이브러리**

> axios

> styled-components

> styled-reset

> react-router-dom

> react-datetime-picker

> chart.js

> react-chartjs-2

> react-icons

<br>
<br>

## 프로젝트 설치 및 실행 방법

1. Node.js를 설치해주세요.

```
https://nodejs.org/
```

2. 레포지토리를 클론 후 폴더로 이동 해주세요.

```
https://github.com/KOWOONLEE/covid_board.git
```

3. dependencies를 설치해주세요.

```
npm install
```

4. 명령어를 통해 server를 실행해주세요.

```
npm run start
```

<br>
<br>

## 기능 소개

### ✅ 메인페이지

- covid data API 이용하여 메인페이지에 데이터 받아오기 
  (통신은 axios, 에러핸들링을 위해 try, catch문 이용)
- 상단에는 전세계 기준 데이터 출력
  API 주소는 ("https://api.covid19api.com/summary" - 서버자체에서 데이터가 0으로 뜰 때가 있음)
  useState로 데이터 저장해서 map을 이용해 숫자 데이터 뿌려줌.
- navbar 클릭시 국가 선택 모달창 뜸
  useEffect함수 내 overflow를 지정해서 모달 창 밖 스크롤 방지
- 국가가 많아서 검색 기능 추가, filter 메소드를 이용해 입력할 글자를 포함한 국가 이름이 나오게 됨.
  국가 리스트 데이터 API 주소는("https://api.covid19api.com/countries")이용
  filter, includes method 이용하여 검색 글자로 필터 걸어주고 해당 데이터를 useState로 저장
- 조회버튼 눌러서 조회하는 것이 아닌, setTimeout 이용하여 500ms 기준으로 반영

![메인페이지 및 검색](https://user-images.githubusercontent.com/108816777/218674910-ccfb7b85-18f8-4e92-8515-5d440958e266.gif)

\*\* 미반영 내용

- 선택한 국가 차트에 반영
- 전세계 기준으로 차트 반영
  (console에는 찍히는데 데이터를 차트에 안들어가서 목데이터 이용 & 전세계 날짜별 API명세서 못찾아서 한국기준 데이터 이용)

<br>
<br>

### ✅ 예방 방법 페이지

- 예방방법 페이지 navbar 화살표 아이콘 클릭시 이전 페이지로 돌아감
  navigator(-1)함수 이용
- 각 예방방법 항목 옆 아래 화살표 클릭하면 상세 내용이 열림
  useState true/false로 닫힘 열림 구분하고 true일때 상세내용 부분 보이도록 css 추가
  열림/닫힘일 때 화살표 아이콘도 변경되게 반영

![예방방법](https://user-images.githubusercontent.com/108816777/218677852-91f48521-00f1-4724-9a9b-7ea69e2a6a5f.gif)

<br>
<br>

## 작성자 깃허브 및 블로그 계정

- 깃허브 https://github.com/KOWOONLEE/covid_board.git
