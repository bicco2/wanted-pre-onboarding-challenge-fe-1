import { useState } from "react";
import styled from "styled-components";

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

export const Modal = (props: any) => {
  // const [isOpen, setIsOpen] = useState(false);

  // const openModalHandler = () => {
  //   setIsOpen(!isOpen);
  // };

  const { open, close, title, content } = props;

  return (
    <div>
      {open ? (
        <ModalBackdrop>
          <ModalView>
            <div>{title}</div>
            <div>{content}</div>
            <div onClick={close}>&times;</div>
          </ModalView>
        </ModalBackdrop>
      ) : null}
    </div>
  );
};
