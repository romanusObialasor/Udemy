import React, { useState } from "react";
import styled from "styled-components";
import { Input, Button } from "antd";
import img from "./google-logo.png";
import firebase from "firebase";
import app from "./base";

const SignUp = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [toggle, setToggle] = useState(false);

  const onSignUp = async () => {
    const signedUser = await app
      .auth()
      .createUserWithEmailAndPassword(email, password);
    console.log(signedUser);

    await app.firestore().collection("union").doc(signedUser.uid).set({
      fullName: fullName,
      email: email,
      password: password,
      time: firebase.firestore.FieldValue.serverTimestamp(),
    });
    console.log("you have signed up");
    setFullName("");
    setEmail("");
    setPassword("");
  };

  const onSignIn = async () => {
    await app.auth().signInWithEmailAndPassword(email, password);
  };

  const signUpWithGoogle = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    await app.auth().signInWithPopup(provider);
  };

  return (
    <Container>
      <Wrapper>
        <Holder1>
          <Text>Log In to Your Udemy Account!</Text>
        </Holder1>
        <Holder>
          <Line></Line>
        </Holder>
        <BoxHolder onClick={signUpWithGoogle}>
          <Icon src={img} />
          <Word>Continue with Google</Word>
        </BoxHolder>
        <Inputs>
          <MyInput
            type="text"
            placeholder="Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
          />
          <MyInput
            type="password"
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
          />
          <MyButton onClick={onSignIn}>Log In</MyButton>
        </Inputs>
        <Forget>
          or <span>Forgot Password</span>
        </Forget>
        <Account>
          Don't have an account?{" "}
          <span>Sign up Log in with your organization</span>
        </Account>
      </Wrapper>
    </Container>
  );
};

export default SignUp;

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  background-color: #ffffff;
  width: 500px;
  height: 600px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const Line = styled.div`
  border-bottom: 1px solid lightgray;
  width: 150%;
  margin-bottom: 20px;
`;

const Lines = styled.div`
  border-bottom: 5px solid lightgray;
  width: 10%;
  margin-top: 5px;
  border-radius: 5px;
  margin-right: 5px;
`;
const Inputs = styled.div`
  width: 500px;
  /* height: 500px; */
  justify-content: center;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const MyInput = styled(Input)`
  width: 350px;
  height: 40px;
  margin: 10px 0;
`;

const MyButton = styled(Button)`
  width: 350px;
  height: 50px;
  margin: 10px 0;
  background-color: #7325a3;
  border-radius: 5px;
  font-weight: bold;
  color: white;
  &:hover {
    background-color: purple;
    border: none;
    color: white;
  }
`;

const Holder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
`;
const Holder1 = styled.div`
  width: 70%;
`;

const Holder2 = styled.div`
  width: 70%;
  display: flex;
`;

const Text = styled.div`
  margin-bottom: 40px;
  font-weight: bold;
  font-size: 17px;
`;

const Terms = styled.div`
  margin-bottom: 40px;
  font-size: 10px;
  span {
    color: #6b8fd9;
    cursor: pointer;
  }
`;

const Already = styled.div`
  margin-bottom: 40px;
  span {
    color: #6b8fd9;
    font-weight: bold;
    cursor: pointer;
  }
`;

const Forget = styled.div`
  span {
    color: #401ba9;
    cursor: pointer;
  }
`;

const Account = styled.div`
  width: 40%;
  padding-top: 20px;
  span {
    color: #401ba9;
    font-weight: bold;
    cursor: pointer;
  }
`;

const BoxHolder = styled.div`
  width: 350px;
  height: 50px;
  background-color: white;
  cursor: pointer;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.4);
  display: flex;
`;

const Icon = styled.img`
  width: 10%;
  object-fit: contain;
  margin: 10px 0;
  margin-left: 20px;
`;

const Word = styled.div`
  margin-left: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
`;
