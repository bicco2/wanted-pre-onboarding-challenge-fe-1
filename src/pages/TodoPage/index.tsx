import { Wrapper, Label } from "./styled";
import ToDoListItem from "./components/TodoListItem";
import TodoCreate from "./components/TodoCreate";

import axios from "axios";
import React, { useState } from "react";
import { useQuery } from "react-query";
import { TodoData } from "customTypes";

const TodoPage: React.FC = () => {
  const [todos, setTodos] = useState([]);
  const ACCESS_TOKEN = localStorage.getItem("accessToken");

  const getTodoListAxios = async () => {
    const data = axios.get("http://localhost:8080/todos", {
      headers: {
        Authorization: ACCESS_TOKEN,
      },
    });
    return data;
  };

  const { isLoading, data, isError, refetch } = useQuery(
    "TodoList",
    getTodoListAxios,
    {
      onSuccess: (data) => {
        setTodos(data.data.data);
      },
      onError: (error) => {
        console.log("onError", error);
      },
    }
  );

  return (
    <Wrapper>
      <Label>TodoList</Label>
      <ul style={{ marginRight: 30 }}>
        {todos.map((todo: TodoData) => (
          <ToDoListItem todo={todo} key={todo.id} />
        ))}
      </ul>
      <TodoCreate fn={refetch()} />
    </Wrapper>
  );
};

export default TodoPage;
