import React from "react";
import styled from "styled-components";
import Card from "./Card";
import FakeCard from "./FakeCard";

const Main = () => {
  return (
    <Container>
      <Wrapper>
        <Top>
          <Header>A broad selection of courses</Header>
          <Sub>
            Choose from 155,000 online video courses with new additions
            published every month
          </Sub>
        </Top>
        <MainMan>
          <Nav>
            <span>Javascript</span>
            <span>HTML</span>
            <span>CSS</span>
            <span>React</span>
            <span>Node</span>
            <span>UI/UX</span>
            <span>Python</span>
          </Nav>
          <Display>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </Display>
          <Cards>
            <FakeCard />
          </Cards>
        </MainMan>
      </Wrapper>
    </Container>
  );
};

export default Main;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  /* background-color: red; */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 95%;
  height: 90%;
  /* background-color: gray; */
`;

const Header = styled.div`
  font-family: SuisseWorks, Georgia, Times, "times new roman", serif,
    "apple color emoji", "segoe ui emoji", "segoe ui symbol";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  color: #1c1d1f;
`;

const Sub = styled.div`
  font-size: 17px;
  line-height: 40px;
  color: #1c1d1f;
`;

const Top = styled.div``;

const MainMan = styled.div`
  margin-top: 20px;
`;

const Nav = styled.div`
  /* width: 100 */
  span {
    text-decoration: none;
    font-weight: bold;
    font-size: 15px;
    margin-right: 20px;
    color: rgba(0, 0, 0, 0.7);
    cursor: pointer;
    :hover {
      color: black;
    }
  }
`;
const Display = styled.div`
  width: 100%;
  height: 400px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  min-height: 100%;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Cards = styled.div``;
// const Container = styled.div``
// const Container = styled.div``
// const Container = styled.div``
// const Container = styled.div``
// const Container = styled.div``
