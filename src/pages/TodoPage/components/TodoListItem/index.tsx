import DeleteImg from "../../../../assets/deleteimg.svg";

import {
  RowDiv,
  Button,
  ButtonImg,
  TitleParam,
  ContainerForBtn,
} from "./styled";

import { useState } from "react";
import axios from "axios";
import { Modal } from "components/Modal";

export default function ToDoListItem(props: any) {
  const { title, content, id, etc1, etc2 } = props.todo;

  const deleteTodoItem = () => {
    axios.delete(`http://localhost:8080/todos/${id}`, {
      headers: {
        Authorization: `eyJhbGciOiJIUzI1NiJ9.dGVzdEBuYXZlci5jb20.mRAKd_fmy6r-v-6qNRhetzamOAjB890YhRrLKzGbsxs`,
      },
    });
  };

  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <RowDiv>
      <li onClick={openModal}>
        <RowDiv>
          <TitleParam>{title}</TitleParam>
        </RowDiv>
      </li>
      <RowDiv>
        <ContainerForBtn>
          <Button onClick={deleteTodoItem}>
            <ButtonImg src={DeleteImg} />
          </Button>
        </ContainerForBtn>
      </RowDiv>

      <Modal
        open={modalOpen}
        close={closeModal}
        title={title}
        content={content}
        id={id}
      />
    </RowDiv>
  );
}
