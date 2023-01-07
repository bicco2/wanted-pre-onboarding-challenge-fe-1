import { MdAdd } from "react-icons/md";
import {
  InsertFormPositioner,
  InsertForm,
  Input,
  CircleButton,
} from "./styled";

import React, { useState } from "react";
import axios from "axios";
import { useMutation, useQueryClient } from "react-query";

function TodoCreate({ refetch }: any) {
  const [open, setOpen] = useState(false);
  const [titleValue, setTitleValue] = useState("");
  const [contentValue, setContentValue] = useState("");

  const onToggle = () => setOpen(!open);
  const onTitleChange = (e: any) => setTitleValue(e.target.value);
  const onContentChange = (e: any) => setContentValue(e.target.value);
  const onSubmit = () => {
    mutation.mutate();
    setOpen(false);
    setTitleValue("");
    setContentValue("");
    // refetch();
  };

  const onCreateTodo = async () => {
    await axios.post(
      "http://localhost:8080/todos",
      {
        title: titleValue,
        content: contentValue,
      },
      {
        headers: {
          Authorization: `eyJhbGciOiJIUzI1NiJ9.dGVzdEBuYXZlci5jb20.mRAKd_fmy6r-v-6qNRhetzamOAjB890YhRrLKzGbsxs`,
        },
      }
    );
  };

  const queryClient = useQueryClient();

  const mutation = useMutation(onCreateTodo, {
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries("TodoList");
      // queryClient.setQueryData('TodoList', data)
    },
  });

  return (
    <>
      {open && (
        <InsertFormPositioner>
          <InsertForm onSubmit={onSubmit}>
            <Input
              autoFocus
              onChange={onTitleChange}
              value={titleValue}
              placeholder="할 일을 입력하세요"
            />
            <Input
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  onSubmit();
                }
              }}
              onChange={onContentChange}
              value={contentValue}
              placeholder="구체적 내용을 입력 후, Enter를 누르세요."
            />
          </InsertForm>
        </InsertFormPositioner>
      )}
      <CircleButton onClick={onToggle} open={open}>
        <MdAdd />
      </CircleButton>
    </>
  );
}

export default React.memo(TodoCreate);
