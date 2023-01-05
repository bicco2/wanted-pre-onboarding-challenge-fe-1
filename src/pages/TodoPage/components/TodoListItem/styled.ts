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
