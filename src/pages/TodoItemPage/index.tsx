import { Wrapper, Label } from "./styled";

import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const TodoItemPage: React.FC = () => {
  const location = useLocation();
  const itemID = location.state?.itemID;
  // const [todoData, setTodoData] = useState<TodoData>();
  const [title, setTitle] = useState();
  const [content, setContent] = useState();

  const getTodoItem = () => {
    axios
      .get(`http://localhost:8080/todos/${itemID}`, {
        headers: {
          Authorization: `eyJhbGciOiJIUzI1NiJ9.dGVzdEBuYXZlci5jb20.mRAKd_fmy6r-v-6qNRhetzamOAjB890YhRrLKzGbsxs`,
        },
      })
      .then((res) => {
        setTitle(res.data.data.title);
        setContent(res.data.data.content);
      });
  };

  getTodoItem();
  return (
    <Wrapper>
      <Label>TodoItemPage</Label>
      <div>title : {title}</div>
      <div>content : {content}</div>
    </Wrapper>
  );
};

export default TodoItemPage;
