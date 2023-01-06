import EditImg from "../../../../assets/editimg.svg";
import DeleteImg from "../../../../assets/deleteimg.svg";

import {
  RowDiv,
  Button,
  ButtonImg,
  TitleParam,
  ContainerForBtn,
} from "./styled";

import axios from "axios";

export default function ToDoListItem(props: any) {
  const { title, content, id, etc1, etc2 } = props.todo;

  const deleteTodoItem = () => {
    axios.delete(`http://localhost:8080/todos/${id}`, {
      headers: {
        Authorization: `eyJhbGciOiJIUzI1NiJ9.dGVzdEBuYXZlci5jb20.mRAKd_fmy6r-v-6qNRhetzamOAjB890YhRrLKzGbsxs`,
      },
    });
  };
  return (
    <RowDiv>
      <li onClick={(e) => console.log(id)}>
        <RowDiv>
          <TitleParam>{title}</TitleParam>
        </RowDiv>
      </li>
      <RowDiv>
        <ContainerForBtn>
          <Button>
            <ButtonImg src={EditImg} />
          </Button>
        </ContainerForBtn>
        <ContainerForBtn>
          <Button onClick={deleteTodoItem}>
            <ButtonImg src={DeleteImg} />
          </Button>
        </ContainerForBtn>
      </RowDiv>
    </RowDiv>
  );
}
