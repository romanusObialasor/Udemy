import React from "react";
import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";

const Land = () => {
  return (
    <Container>
      <ImageBG src="/images/woman.jpg" />
      <Wrapper>
        <Left>
          <Head>Learning that gets you</Head>
          <Content>
            Skills for your present (and your future). Get started with us
          </Content>
          <Search>
            <Input placeholder="What do you want to learn" />
            <AiOutlineSearch />
          </Search>
        </Left>
      </Wrapper>
    </Container>
  );
};

export default Land;

const Container = styled.div`
  width: 100%;
  height: 60vh;
  /* padding-top: 20px; */
  /* background-color: red; */
  /* position: relative; */
`;

const Wrapper = styled.div`
  /* background-color: red; */
  height: 100%;
  width: 600px;
  /* min-width: 300px; */
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: red; */
  /* margin-top: 20px; */
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 200px;
  }
`;

const ImageBG = styled.img`
  width: 100%;
  height: 60%;
  object-fit: cover;
  position: absolute;
  z-index: -1;
  @media screen and (max-width: 768px) {
    position: unset;
  }
`;

const Head = styled.div`
  font-family: SuisseWorks, Georgia, Times, "times new roman", serif,
    "apple color emoji", "segoe ui emoji", "segoe ui symbol";
  font-weight: 700;
  font-size: 40px;
  line-height: 50px;
  color: #1c1d1f;
`;

const Content = styled.div`
  font-size: 19px;
`;

const Search = styled.div`
  /* background-color: red; */
  height: 45px;
  border: 1px solid black;
  display: flex;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  width: 80%;
  font-size: 15px;
`;

const Left = styled.div`
  background-color: white;
  height: 70%;
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-left: 20px;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 200px;
  }
`;

const Input = styled.input`
  flex: 1;
  height: 100%;
  border: none;
  outline: none;
  font-size: 15px;
  background-color: transparent;
  ::placeholder {
    font-size: 15px;
  }
`;

// const Container = styled.div``;
// const Container = styled.div``;
// const Container = styled.div``;
