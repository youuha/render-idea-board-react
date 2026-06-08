// Card라는 함수형 컴포넌트를 만든다.
// props는 App.jsx에서 넘겨준 값을 받는 객체이다.
// 카드 한 장을 담당하는 컴포넌트이다.
// props는 App.jsx에서 보내준 데이터를 받는 객체이다.
function Card(props) {
    return (
      // 카드 한 장 전체 영역
      <article className="card">
  
        {/* 카드 분야 */}
        <span className="card-category">{props.category}</span>
  
        {/* 카드 제목 */}
        <h3 className="card-title">{props.title}</h3>
  
        {/* 카드 설명 */}
        <p className="card-desc">{props.desc}</p>

        <button
          type="button"
          className="card-delete-btn"
          onClick={() => props.onDelete(props.id)}
        >
          삭제
        </button>

      </article>
    );
  }
  
  // Card 컴포넌트를 다른 파일에서 사용할 수 있게 내보낸다.
  export default Card;