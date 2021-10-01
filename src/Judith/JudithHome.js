import React from "react";
import styled from "styled-components";

const JudithHome = () => {
  return (
    <Container>
      <Wrapper>
        <TextHolder>The Complete 2021 Web Development Bootcamp</TextHolder>
      </Wrapper>
    </Container>
  );
};

export default JudithHome;

const TextHolder = styled.div`
  background-color: black;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const Wrapper = styled.div`
  width: 90%;
  height: 100%;
  background-color: #rgb(15, 9, 9);
`;
