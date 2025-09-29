import StudentItem from "./StudentItem";

function StudentList({students}) { // props, 부모에게서 받아온것 {}- 배열
    return (
        <table className="StudentList">
            <thead>
                <tr>
                    <th>이름</th>
                    <th>수학</th>
                    <th>영어</th>
                    <th>과학</th>
                    <th>평균</th>
                    <th>삭제</th>
                </tr>
            </thead>
            <tbody>
                <StudentItem />
            </tbody>
        </table>
    );

}

export default StudentList;