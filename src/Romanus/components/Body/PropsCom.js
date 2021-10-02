import React from "react";
import styled from "styled-components";

const PropsCom = ({ image, head, text, button, rv, hd }) => {
  return (
    <Container>
      <Wrapper rv={rv}>
        <Image src={image} />
        <Content>
          <Head>{head}</Head>
          <ImageHead src="/images/UdemyBussiness.svg" hd={hd} />
          <Read>{text}</Read>
          <ButtonHolder>
            <Button1>{button}</Button1>
          </ButtonHolder>
        </Content>
      </Wrapper>
    </Container>
  );
};

export default PropsCom;
const ImageHead = styled.img`
  width: 300px;
  display: ${({ hd }) => (hd ? "block" : "none")};
`;

const ButtonHolder = styled.div`
  width: 100%;
`;

const Button1 = styled.div`
  background-color: black;
  color: white;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 180px;
  height: 40px;
`;

const Read = styled.div`
  font-size: 19px;
`;

const Container = styled.div`
  /* background-color: red; */
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 65%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: ${({ rv }) => (rv ? "row" : "row-reverse")};
  /* background-color: green; */
  /* flex-wrap: wrap; */
`;
const Image = styled.img``;
const Content = styled.div`
  width: 500px;
  height: 50%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  /* background-color: hotpink; */
`;
const Head = styled.div`
  font-family: SuisseWorks, Georgia, Times, "times new roman", serif,
    "apple color emoji", "segoe ui emoji", "segoe ui symbol";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  color: #1c1d1f;
`;

// const Wrapper = styled.div``
