import React, { useState } from "react";
import { Wrapper, Label, Input } from "./styled";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UserPage: React.FC = () => {
  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");
  const [checkId, setCheckId] = useState(false);
  const [checkPw, setCheckPw] = useState(false);
  const [checkTotal, setCheckTotal] = useState(true);

  const navigate = useNavigate();

  const onIdChange = (e: any) => {
    setUserId(e.target.value);
  };
  const onPwChange = (e: any) => {
    setUserPw(e.target.value);
  };

  const checkEmail = (e: any) => {
    var regExp =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    console.log("이메일 유효성 검사 :: ", regExp.test(e.target.value));

    if (regExp.test(e.target.value)) {
      setCheckId(true);
      if (checkId && checkPw) {
        setCheckTotal(false);
      } else {
        setCheckTotal(true);
      }
    } else {
      setCheckTotal(true);
    }
  };

  const checkPassword = (e: any) => {
    var regExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,10}$/;
    console.log("비밀번호 유효성 검사 :: ", regExp.test(e.target.value));
    if (regExp.test(e.target.value)) {
      setCheckPw(true);
      if (checkId && checkPw) {
        setCheckTotal(false);
      } else {
        setCheckTotal(true);
      }
    } else {
      setCheckTotal(true);
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
        // 여기서 로컬스토리지로 res.data.token 값 저장해야함
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
      <Input
        autoFocus
        onChange={onIdChange}
        onBlur={checkEmail}
        value={userId}
        placeholder="ID"
      />
      PW
      <Input
        onChange={onPwChange}
        onBlur={checkPassword}
        value={userPw}
        placeholder="Passward"
        type="password"
      />
      <button disabled={checkTotal ? true : false} onClick={handleLogin}>
        login
      </button>
    </Wrapper>
  );
};

export default UserPage;
