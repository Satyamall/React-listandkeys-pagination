import { useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import { v4 as uuid } from "uuid";
import Pagination from "./Pagination";

function Todo() {
  const [list, setList] = useState([]);
  const [showCompleted, setShowCompleted] = useState(false);
  const [page, setPage] = useState(1);

  const handleSubmit = ({ title, description }) => {
    const payload = {
      id: uuid(),
      title,
      description,
      status: list.length % 2 === 0 ? true : false
    };
    setList([...list, payload]);
  };

  const changePageTo = (num) => {
    if (num <= 1) {
      setPage(1);
      return;
    }
    setPage(num);
  };
  const perPage = 2;
  // lowerBound
  // upperBound
  const filteredResults = list.filter(
    (_, i) => i >= (page - 1) * perPage && i < page * perPage
  );


  return (
    <div>
      <TodoInput onSubmit={handleSubmit} />

      <TodoList data={list.filter((item) => !item.status)} data={filteredResults} />
      <div>
        <button onClick={() => setShowCompleted(!showCompleted)}>
          toggle show completed
        </button>
      </div>
      {showCompleted && <TodoList data={list.filter((item) => item.status)} />}

      <div>
        <Pagination
          currentPage={page}
          onClickCallback={(page) => changePageTo(page)}
          total={5}
        />
      </div>
    </div>
  );
}

export default Todo;
