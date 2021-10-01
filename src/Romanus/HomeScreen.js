import React from "react";
import styled from "styled-components";
import Main from "./components/Body/Main";
import Others from "./components/Body/Others";
import Land from "./components/Land";

const HomeScreen = () => {
  return (
    <Container>
      <Land />
      <Main />
    </Container>
  );
};

export default HomeScreen;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
