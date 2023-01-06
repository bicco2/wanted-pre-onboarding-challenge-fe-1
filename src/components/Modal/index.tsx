import { useState } from "react";
import styled, { css } from "styled-components";

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
  border: 1px solid #dee2e6;
  width: 100%;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;
`;

export const EditButton = styled("button")<{ edit: boolean }>`
  ${(props) =>
    props.edit &&
    css`
      input: disabled;
      background: #ff6b6b;
    `}
`;

export const Modal = (props: any) => {
  const { open, close, title, content } = props;

  const [editToggle, setEditToggle] = useState(true);

  const [titleValue, setTitleValue] = useState(title);
  const [contentValue, setContentValue] = useState(content);
  const onTitleChange = (e: any) => setTitleValue(e.target.value);
  const onContentChange = (e: any) => setContentValue(e.target.value);

  return (
    <div>
      {open ? (
        <ModalBackdrop>
          <ModalView>
            <Input
              disabled={editToggle ? true : false}
              autoFocus
              onChange={onTitleChange}
              value={titleValue}
              placeholder="할 일을 입력하세요"
            />
            <Input
              disabled={editToggle ? true : false}
              onChange={onContentChange}
              value={contentValue}
              placeholder="할 일을 입력하세요"
            />
            <EditButton edit={true} onClick={() => setEditToggle(!editToggle)}>
              edit
            </EditButton>
            <div onClick={close}>&times;</div>
          </ModalView>
        </ModalBackdrop>
      ) : null}
    </div>
  );
};
