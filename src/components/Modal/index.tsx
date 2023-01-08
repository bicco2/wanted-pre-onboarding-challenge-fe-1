import EditImg from "../../assets/editimg.svg";
import EscImg from "../../assets/escimg.svg";
import {
  ModalBackdrop,
  ModalView,
  Input,
  BtnContainer,
  Button,
  ButtonImg,
} from "./styled";

import { useState } from "react";
import axios from "axios";

export const Modal = (props: any) => {
  const { open, close, title, content, id } = props;

  const [editToggle, setEditToggle] = useState(true);

  const [titleValue, setTitleValue] = useState(title);
  const [contentValue, setContentValue] = useState(content);
  const onTitleChange = (e: any) => setTitleValue(e.target.value);
  const onContentChange = (e: any) => setContentValue(e.target.value);

  const ACCESS_TOKEN = localStorage.getItem("accessToken");

  const updateTodoItem = async () => {
    await axios.put(
      `http://localhost:8080/todos/${id}`,
      {
        title: titleValue,
        content: contentValue,
      },
      {
        headers: {
          Authorization: ACCESS_TOKEN,
        },
      }
    );
    if (editToggle === false) {
      alert("수정 완료");
    }
    setEditToggle(!editToggle);
  };

  const handleClose = () => {
    setEditToggle(true);
    close();
  };

  return (
    <div>
      {open ? (
        <ModalBackdrop>
          <ModalView>
            title
            <Input
              disabled={editToggle ? true : false}
              autoFocus
              onChange={onTitleChange}
              value={titleValue}
              placeholder="할 일을 입력하세요"
            />
            content
            <Input
              disabled={editToggle ? true : false}
              onChange={onContentChange}
              value={contentValue}
              placeholder="할 일을 입력하세요"
            />
            <BtnContainer>
              <Button onClick={updateTodoItem}>
                <ButtonImg src={EditImg} />
              </Button>

              <Button onClick={handleClose}>
                <ButtonImg src={EscImg} />
              </Button>
            </BtnContainer>
          </ModalView>
        </ModalBackdrop>
      ) : null}
    </div>
  );
};
