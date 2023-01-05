import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
`;

export const Label = styled.label`
  font-size: 2rem;
  margin-bottom: 0.25rem;
  width: fit-content; ;
`;

export const Input = styled.input`
  width: 400px;
  border: 1px solid;
  outline: none;
  border-radius: 0px;
  line-height: 2.5rem;
  font-size: 1.2rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
`;
