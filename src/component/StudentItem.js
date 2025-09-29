function StudentItem() {
    return(
        <tr className="StudentItem">
            <td>{name}</td>
            <td>{math}</td>
            <td>{eng}</td>
            <td>{sci}</td>
            <td>{avg}</td>
            <td>
                <button>삭제</button>
            </td>
        </tr>
    );
}

export default StudentItem;