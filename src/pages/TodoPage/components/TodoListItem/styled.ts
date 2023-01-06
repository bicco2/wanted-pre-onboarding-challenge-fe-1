import styled from "styled-components";

export const RowDiv = styled.div`
  display: flex;
  flex-direction: row;
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

export const TitleParam = styled.p`
  margin-right: 10px;
`;

export const ContainerForBtn = styled.div`
  display: flex;
  justify-content: center;
`;

//-----

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
