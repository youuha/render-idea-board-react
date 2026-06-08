// React에서 useState 함수를 가져온다.
// useState는 화면에서 바뀌는 값을 저장하는 함수이다.
import { useState } from 'react';

// App.css 파일을 가져온다.
import './App.css';

// Header 컴포넌트를 가져온다.
import Header from './components/Header';

// Card 컴포넌트를 가져온다.
import Card from './components/Card';

// react-icons 라이브러리에서 오름차순/내림차순 아이콘을 가져온다.
// fa6는 FontAwesome 6 아이콘 모음이다.
import { FaArrowDownAZ, FaArrowUpAZ } from 'react-icons/fa6';

function App() {
  // 카드 목록 데이터 state
  const [ideas, setIdeas] = useState([
    {
      id: 1,
      category: "AI",
      title: "제조 공정 불량 자동 검출",
      desc: "생산 라인 영상을 학습해 불량품을 실시간으로 가려내는 시스템.",
    },
    {
      id: 2,
      category: "바이오",
      title: "단백질 구조 예측 도우미",
      desc: "신약 후보 물질의 단백질 구조를 빠르게 추정해 연구 기간을 단축.",
    },
    {
      id: 3,
      category: "반도체",
      title: "소재 결함 데이터셋 구축",
      desc: "반도체 소재의 결함 사례를 모아 분석용 데이터로 정리.",
    },
  ]);

  // 제목 입력값 state
  const [title, setTitle] = useState("");

  // 분야 선택값 state
  const [category, setCategory] = useState("AI");

  // 설명 입력값 state
  const [desc, setDesc] = useState("");

  // 정렬 방향 state
  // asc = 오름차순
  // desc = 내림차순
  const [sortOrder, setSortOrder] = useState("asc");

  // 등록 버튼을 눌렀을 때 실행되는 함수
  function handleSubmit(event) {
    // form 기본 새로고침을 막는다.
    event.preventDefault();

    // 제목 또는 설명이 비어 있으면 등록하지 않는다.
    if (title.trim() === "" || desc.trim() === "") {
      alert("제목과 설명을 입력해주세요.");
      return;
    }

    // 새 카드 데이터 객체 만들기
    const newIdea = {
      id: Date.now(),
      category: category,
      title: title,
      desc: desc,
    };

    // 기존 ideas 배열 뒤에 새 객체 추가
    setIdeas([...ideas, newIdea]);

    // 입력창 초기화
    setTitle("");
    setCategory("AI");
    setDesc("");
  }

  // 제목 기준 오름차순 정렬 함수
  function sortAscending() {
    // 기존 배열을 직접 바꾸지 않기 위해 [...ideas]로 복사한다.
    const sortedIdeas = [...ideas].sort(function (a, b) {
      return a.title.localeCompare(b.title);
    });

    // 정렬된 배열로 ideas state 변경
    setIdeas(sortedIdeas);

    // 현재 정렬 상태를 오름차순으로 저장
    setSortOrder("asc");
  }

  // 제목 기준 내림차순 정렬 함수
  function sortDescending() {
    // 기존 배열을 직접 바꾸지 않기 위해 [...ideas]로 복사한다.
    const sortedIdeas = [...ideas].sort(function (a, b) {
      return b.title.localeCompare(a.title);
    });

    // 정렬된 배열로 ideas state 변경
    setIdeas(sortedIdeas);

    // 현재 정렬 상태를 내림차순으로 저장
    setSortOrder("desc");
  }

  return (
    <>
      {/* 헤더 영역 */}
      <Header />

      {/* 본문 영역 */}
      <main>
        {/* 입력 폼 영역 */}
        <section className="form-section">
          <form className="idea-form" onSubmit={handleSubmit}>
            <label htmlFor="title">제목</label>

            <input
              type="text"
              id="title"
              placeholder="아이디어 제목을 입력하세요"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />

            <label htmlFor="category">분야</label>

            <select
              id="category"
              value={category}
              onChange={(event) => setCategory(event.target.value)}
            >
              <option value="AI">AI</option>
              <option value="바이오">바이오</option>
              <option value="반도체">반도체</option>
              <option value="기타">기타</option>
            </select>

            <label htmlFor="description">설명</label>

            <textarea
              id="description"
              rows={3}
              placeholder="아이디어를 간단히 설명하세요"
              value={desc}
              onChange={(event) => setDesc(event.target.value)}
            />

            <button type="submit">등록</button>
          </form>
        </section>

        {/* 정렬 버튼 영역 */}
        <section className="sort-section">
          <p className="sort-title">제목 기준 정렬</p>

          <div className="sort-buttons">
            <button
              type="button"
              className={sortOrder === "asc" ? "sort-button active" : "sort-button"}
              onClick={sortAscending}
            >
              <FaArrowDownAZ />
              오름차순
            </button>

            <button
              type="button"
              className={sortOrder === "desc" ? "sort-button active" : "sort-button"}
              onClick={sortDescending}
            >
              <FaArrowUpAZ />
              내림차순
            </button>
          </div>
        </section>

        {/* 카드 목록 영역 */}
        <section className="card-grid">
          {ideas.map((idea) => (
            <Card
              key={idea.id}
              category={idea.category}
              title={idea.title}
              desc={idea.desc}
            />
          ))}
        </section>
      </main>
    </>
  );
}

export default App;