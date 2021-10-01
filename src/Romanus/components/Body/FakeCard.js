import React from "react";
import styled from "styled-components";

const FakeCard = () => {
  return (
    <Container>
      <Wrapper>
        <img src="/1.jpg" />
      </Wrapper>
      <Top>Romnauu</Top>
    </Container>
  );
};

export default FakeCard;

const Container = styled.div`
  margin-right: 20px;
  margin-top: 20px;
`;

const Wrapper = styled.div`
  background-color: #f8f9fb;
  width: 300px;
  height: 300px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    transition: 350ms;
    width: 90%;
  }
  :hover {
    img {
      transform: scale(1.05);
      /* object-fit: cover; */
    }
  }
`;

const Top = styled.div`
  margin-top: 5px;
  font-weight: 600;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;
