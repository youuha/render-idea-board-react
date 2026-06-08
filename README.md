# R&D 아이디어 보드 (React)

연구·기술 아이디어를 등록하고 카드 형태로 정리하는 React 웹 애플리케이션입니다.

## 주요 기능

- **아이디어 등록** — 제목, 분야, 설명을 입력해 새 카드 추가
- **제목 정렬** — 오름차순 / 내림차순 버튼으로 카드 목록 정렬
- **카드 목록** — 등록된 아이디어를 그리드 형태로 표시
- **컴포넌트 분리** — `Header`, `Card` 컴포넌트로 UI 구조화

## 기술 스택

- [React](https://react.dev/) 19
- [Vite](https://vitejs.dev/)
- [react-icons](https://react-icons.github.io/react-icons/) (정렬 아이콘)

## 프로젝트 구조

```
src/
├── App.jsx          # 메인 앱 (상태 관리, 등록·정렬 로직)
├── App.css          # 스타일
├── index.css        # 전역 스타일
├── main.jsx         # 앱 진입점
└── components/
    ├── Header.jsx   # 상단 헤더
    └── Card.jsx     # 아이디어 카드
```

## 시작하기

### 설치

```bash
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

브라우저에서 표시되는 주소(기본: `http://localhost:5173`)로 접속합니다.

### 빌드

```bash
npm run build
```

### 미리보기

```bash
npm run preview
```

## 사용 방법

1. **등록** — 제목과 설명을 입력하고 분야를 선택한 뒤 `등록` 버튼을 클릭합니다.
2. **정렬** — 입력 폼 아래 `오름차순` / `내림차순` 버튼으로 제목 기준 정렬을 변경합니다.

## 저장소

https://github.com/youuha/render-idea-board-react
