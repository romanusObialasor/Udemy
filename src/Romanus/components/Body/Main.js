import React, { useEffect, useState } from "react";
import styled from "styled-components";
import app from "../../../base";
import Card from "./Card";
import FakeCard from "./FakeCard";
import Others from "./Others";

const Main = () => {
  const [data, setData] = useState([]);
  const [othersData, setOthersData] = useState([]);
  const fetchCssData = async () => {
    await app
      .firestore()
      .collection("udemyCourses")
      .orderBy("category")
      .startAt("css")
      .endAt("css")
      .onSnapshot((snap) => {
        const item = [];
        snap.forEach((doc) => {
          item.push({ ...doc.data(), id: doc.id });
        });
        setData(item);
      });
  };
  const fetchLimit = async () => {
    await app
      .firestore()
      .collection("udemyCourses")
      .limit(5)
      .onSnapshot((snap) => {
        const item = [];
        snap.forEach((doc) => {
          item.push({ ...doc.data(), id: doc.id });
        });
        setOthersData(item);
      });
  };
  useEffect(() => {
    fetchCssData();
    fetchLimit();
    console.log(data);
  }, []);

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
            <Title>Expand your career opportunities with Python</Title>
            <Content>
              Whether you work in machine learning or finance, or are pursuing a
              career in web development or data science, Python is one of the
              most important skills you can learn. Python's simple syntax is
              especially suited for desktop, web, and business applications.
              Python's design philosophy emphasize
            </Content>
            <Offers>
              {data.map((item) => (
                <Card
                  image={item.avatar}
                  title={item.title}
                  teacher={item.teacher}
                  rate={item.rate}
                />
              ))}
            </Offers>
          </Display>
          <OtherContent>
            <Others />
          </OtherContent>
          <Student>
            <Title>Student are viewing</Title>
            <StudentCard>
              {othersData.map((item) => (
                <Card
                  image={item.avatar}
                  title={item.title}
                  teacher={item.teacher}
                  rate={item.rate}
                />
              ))}
            </StudentCard>
          </Student>
          <Cards>
            <Cat>Categories</Cat>
            <ScaleCard>
              <FakeCard />
              <FakeCard />
              <FakeCard />
              <FakeCard />
              <FakeCard />
              <FakeCard />
              <FakeCard />
              <FakeCard />
            </ScaleCard>
          </Cards>
        </MainMan>
      </Wrapper>
    </Container>
  );
};

export default Main;

// const Container = styled.div``
// const Container = styled.div``
// const Container = styled.div``
// const Container = styled.div``
// const Container = styled.div``

const StudentCard = styled.div`
  margin-top: 30px;
  justify-content: space-between;
  flex-wrap: wrap;
  display: flex;
`;

const Student = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
`;

const OtherContent = styled.div``;

const Content = styled.div`
  font-size: 17px;
  max-width: 1000px;
  @media screen and (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

const Title = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  line-height: 40px;
  color: #1c1d1f;
  @media screen and (max-width: 760px) {
    width: 300px;
    display: flex;
    background-color: aliceblue;
    align-items: center;
    margin-bottom: 20px;
    text-align: center;
  }
`;

const Offers = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    align-items: center;
    flex-wrap: wrap;
  }
  /* background-color: red; */
`;

const Cat = styled.div`
  font-family: SuisseWorks, Georgia, Times, "times new roman", serif,
    "apple color emoji", "segoe ui emoji", "segoe ui symbol";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  color: #1c1d1f;
`;

const Container = styled.div`
  width: 100%;
  height: auto;
  /* background-color: red; */
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
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
  font-size: 20px;
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
  width: 95%;
  height: 450px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  min-height: auto;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
  flex-direction: column;
  padding: 30px;
  /* padding-right: 20px; */
  @media screen and (max-width: 760px) {
    height: 100%;
    align-items: center;
  }
`;

const Cards = styled.div`
  margin-top: 40px;
  /* background-color: red; */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const ScaleCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  align-items: center;
  justify-content: center;
  width: 100%;
  /* background-color: green; */
`;
