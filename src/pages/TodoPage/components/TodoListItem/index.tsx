import EditImg from "../../../../assets/editimg.svg";
import DeleteImg from "../../../../assets/deleteimg.svg";

import {
  RowDiv,
  Button,
  ButtonImg,
  TitleParam,
  ContainerForBtn,
} from "./styled";

export default function ToDoListItem(props: any) {
  const { title, content, id, etc1, etc2 } = props.todo;
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
          <Button>
            <ButtonImg src={DeleteImg} />
          </Button>
        </ContainerForBtn>
      </RowDiv>
    </RowDiv>
  );
}
