import EditImg from "../../assets/editimg.svg";
import EscImg from "../../assets/escimg.svg";

import { useState } from "react";
import styled from "styled-components";
import axios from "axios";

export const ModalContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-flow: row wrep;
  justify-content: center;
  align-items: center;
`;

export const ModalBtn = styled.button`
  background-color: #4000c7;
  text-decoration: none;
  border: none;
  padding: 20px;
  color: white;
  border-radius: 30px;
  cursor: grab;
`;
export const ModalBackdrop = styled.div`
  width: 400px;
  height: 500px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
`;

export const ModalView = styled.div.attrs((props) => ({
  role: "dialog",
}))`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  text-decoration: none;
  padding: 30px 90px;
  background-color: white;
  border-radius: 30px;
  color: #4000c7;
`;

export const Input = styled.input`
  padding: 12px;
  border-radius: 4px;
  border: 0.1px solid #dee2e6;
  width: 100%;
  font-size: 18px;
  box-sizing: border-box;
`;

export const ButtonImg = styled.img`
  width: 30px;
  height: 30px;
`;

export const Button = styled.button`
  all: unset;
  display: flex;
  width: fit;
  height: fit;
  border-radius: 20px;
  margin-right: 1rem;
  background-color: white;
  justify-content: center;
  align-items: center;
  outline: none;
  &:hover {
    cursor: pointer;
  }
  &:focus {
    outline: none;
  }
`;

export const BtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 1rem;
  margin-left: 1rem;
`;

export const CloseBtn = styled.div`
  display: flex;
  align-items: center;
`;

export const Modal = (props: any) => {
  const { open, close, title, content, id } = props;

  const [editToggle, setEditToggle] = useState(true);

  const [titleValue, setTitleValue] = useState(title);
  const [contentValue, setContentValue] = useState(content);
  const onTitleChange = (e: any) => setTitleValue(e.target.value);
  const onContentChange = (e: any) => setContentValue(e.target.value);

  const updateTodoItem = async () => {
    await axios.put(
      `http://localhost:8080/todos/${id}`,
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
