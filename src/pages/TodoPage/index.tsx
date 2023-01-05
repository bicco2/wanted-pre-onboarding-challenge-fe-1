import React, { useEffect, useState, useRef } from "react";

import { Wrapper, Label, Input } from "./styled";
import axios from "axios";
import ToDoListItem from "./components/TodoListItem";
// import { FooterWrapper, FooterItemWrapper, FooterItem } from "./styled";

interface TodoData {
  title: string;
  content: string;
  id: string;
  createdAt: string;
  updatedAt: string;
}

const TodoPage: React.FC = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/todos", {
        headers: {
          Authorization: `eyJhbGciOiJIUzI1NiJ9.dGVzdEBuYXZlci5jb20.mRAKd_fmy6r-v-6qNRhetzamOAjB890YhRrLKzGbsxs`,
        },
      })
      .then((res) => {
        setTodos(res.data.data);
      });
  }, []);
  console.log(todos, "최상단");

  return (
    <Wrapper>
      <Label>TodoList</Label>
      <ul>
        {todos.map((todo: TodoData) => (
          <ToDoListItem todo={todo} key={todo.id} />
        ))}
      </ul>
      <Input></Input>
    </Wrapper>
  );
};

export default TodoPage;
