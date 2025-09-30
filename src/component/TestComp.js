import { type } from "@testing-library/user-event/dist/type";
import { useReducer } from "react";

function reducer(state, action) {
  //상태 변화 함수
  //(state,action) -> state:현재 변수의 값
  // action:촉발함수 dispatch에서 보내준 action객체(예 :{ type: "INCREASE", data: 1 }) 저장

  switch (action.type) {
    case "INCREASE":
      state = state + action.data;
      return state;

    case "DECREASE":
      state = state - action.data;
      return state;

    case "INIT":
      state = action.data;
      return state;

    default:
      return state;
  }
}

function TestComp() {
  const [count, dispatch] = useReducer(reducer, 0); //dispatch : 상태 변화 촉발함수

  return (
    <div>
      <h3>테스트 컴포넌트</h3>
      <h2>{count}</h2>
      <div>
        <button onClick={() => dispatch({ type: "INCREASE", data: 1 })}>
          증가
        </button>
        <button onClick={() => dispatch({ type: "DECREASE", data: 1 })}>
          감소
        </button>
        <button onClick={() => dispatch({ type: "INIT", data: 0 })}>
          초기화
        </button>
      </div>
    </div>
  );
}

export default TestComp;
