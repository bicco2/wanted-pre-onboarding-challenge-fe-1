import React, { useState, useRef } from "react";
import { Wrapper, Label, Input } from "./styled";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UserPage: React.FC = () => {
  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");
  const checkId = useRef(false);
  const checkPw = useRef(false);
  const checkTotal = useRef(true);

  const navigate = useNavigate();

  const onIdChange = (e: any) => {
    setUserId(e.target.value);
    var regExp =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

    if (regExp.test(e.target.value)) {
      checkId.current = true;
      if (checkId.current && checkPw.current) {
        checkTotal.current = false;
      } else {
        checkTotal.current = true;
      }
    } else {
      checkTotal.current = true;
    }
  };
  const onPwChange = (e: any) => {
    setUserPw(e.target.value);
    var regExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,10}$/;
    if (regExp.test(e.target.value)) {
      checkPw.current = true;
      if (checkId.current && checkPw.current) {
        checkTotal.current = false;
      } else {
        checkTotal.current = true;
      }
    } else {
      checkTotal.current = true;
    }
  };

  const handleLogin = () => {
    axios
      .post("http://localhost:8080/users/login", {
        email: userId,
        password: userPw,
      })
      .then((res) => {
        console.log(res.data.token);
        navigate(`/todo`);
        localStorage.setItem("accessToken", res.data.token);
      })
      .catch((err) => {
        console.log(err);
        alert("정보가 잘못되었습니다.");
      });
  };

  return (
    <Wrapper>
      <Label>Login</Label>
      ID
      <Input autoFocus onChange={onIdChange} value={userId} placeholder="ID" />
      PW
      <Input
        onChange={onPwChange}
        value={userPw}
        placeholder="Passward"
        type="password"
      />
      <button
        disabled={checkTotal.current ? true : false}
        onClick={handleLogin}
        style={{ marginBottom: 20 }}
      >
        login
      </button>
      <a href="/signup">계정이 없으신가요?</a>
    </Wrapper>
  );
};

export default UserPage;
