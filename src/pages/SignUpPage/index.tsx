import React, { useState, useRef } from "react";
import { Wrapper, Label, Input } from "./styled";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUpPage: React.FC = () => {
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
      .post("http://localhost:8080/users/create", {
        email: userId,
        password: userPw,
      })
      .then((res) => {
        console.log(res.data.token);
        navigate(`/auth`);
      })
      .catch((err) => {
        console.log(err);
        alert("정보가 잘못되었습니다.");
      });
  };

  return (
    <Wrapper>
      <Label>Sign Up</Label>
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
      >
        create accounnt
      </button>
    </Wrapper>
  );
};

export default SignUpPage;
