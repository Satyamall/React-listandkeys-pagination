function TodoList({ data }) {
  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>
          {item.title} - {item.description} - {item.status ? "DONE" : "PENDING"}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
