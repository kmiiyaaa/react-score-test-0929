import { useState, useRef } from "react";
import "./App.css";
import StudentInput from "./component/StudentInput";
import StudentList from "./component/StudentList";

function App() {
  const [students, setStudents] = useState([]);
  //학생들의 배열 [{name,math,rng,sic}, {name,math,eng,sci},...]
  // 유저입력값(studnetInput)-> useState 배열로 넣음 -> 배열이 students에 저장 -> sudentList로 넘겨주고 -> 리스트 찍어 화면에 보여줌

  const idRef = useRef(0);

  function onCreateStudent(name, math, eng, sci) {
    if (!name || !math || !eng || !sci) {
      //참이면 4개의 입력값중 한개라도 공백 발생
      alert("이름과 모든 과목 점수는 필수 입력사항 입니다.");
      return;
    }

    const avg = ((Number(math) + Number(eng) + Number(sci)) / 3).toFixed(2); // Number로 숫자형 만들어주기  .toFixed(2) : 소수점 두자리까지 나타낸다

    const newStudent = {
      id: idRef.current, //id 값은 0부터시작, 1씩 늘어나게 저장/ useRef사용
      name, //문자열은 이름만 선언
      math: math,
      eng: eng,
      sci: sci,
      avg: avg,
    };

    setStudents([...students, newStudent]); //최신 학생을 뒤에 추가
    idRef.current += 1; //id 값은 0부터시작, 1씩 늘어나게 저장
  }

  function deleteStudent(id) {
    setStudents(
      //학생을 삭제한 결과 반영
      students.filter((student) => student.id !== id)
    );
  }

  return (
    <div className="App">
      <h2>학생 성적 관리</h2>
      <StudentInput onCreateStudent={onCreateStudent} />
      <StudentList students={students} />{" "}
      {/* StudentList에 students 저장된값 던져주기위해 */}
    </div>
  );
}

export default App;
