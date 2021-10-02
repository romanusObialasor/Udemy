import { Input } from "antd";
import React, { useState } from "react";
import styled from "styled-components";
import Pics from "./hero.jpg";
import Carder from "./Card";
import BigCard from "./Featured";
import XdCard from "./xdCard";
import Developed from "./Develop";
import { Link } from "react-router-dom";
const Landing = () => {
  const [rating, setRating] = useState(0);
  const handleRating = (rate) => {
    setRating(rate);
    // Some logic
  };

  return (
    <Container>
      <Wrapper>
        <Hero>
          <Card>
            <Heading>Welcome back — time to learn & save</Heading>
            <Notes>
              {" "}
              We missed you! So here’s an offer just for you: get courses from
              $12.99. It’s six hours of savings
            </Notes>
            <Inputed placeholder="What Do You Want To Learn ?" />
          </Card>
          <Picture src="/images/her05.png" />
        </Hero>
        <Card1>
          <Heading>Welcome back — time to learn & save</Heading>
          <Notes>
            {" "}
            We missed you! So here’s an offer just for you: get courses from
            $12.99. It’s six hours of savings
          </Notes>
          <Inputed placeholder="What Do You Want To Learn ?" />
        </Card1>
        <Selection>Lets Start Learning, Adeniran</Selection>
        <Train>
          <Hold>
            <span>Training 5 or more people?</span>
            <p>Get your team access to Udemy's top 6,000+ courses</p>
          </Hold>
          <ButHold>
            <First>Get Udemy Business</First>
            <Second>Dismiss</Second>
          </ButHold>
        </Train>
        <Selection>What To Learn Next</Selection>
        <Recommend>Recommended For You</Recommend>

        <Carder />
        <Recommend> Topics Recommended For You</Recommend>
        <TopicRec>
          <Link to="/describe">
            <Holders>Javascript</Holders>
          </Link>
          <Holders>Python</Holders>
          <Holders>CSS</Holders>
          <Holders>Reactjs</Holders>
          <Holders>Nodejs</Holders>
          <Holders>HTML</Holders>
        </TopicRec>
        <BigCard />
        <Recommend>Top Design Courses In Design</Recommend>
        <XdCard />
        <Recommend>Top Courses In Development</Recommend>
        <Developed />
      </Wrapper>
    </Container>
  );
};

export default Landing;
const Holders = styled.div`
  height: 50px;
  width: 200px;
  border: 1px solid black;
  justify-content: center;
  align-items: center;
  display: flex;
  font-size: 20px;
  font-weight: 600;
  border-radius: 2px;
  transform: scale(1);
  transition: all 350ms;
  margin: 5px;
  :hover {
    cursor: pointer;
    background-color: gray;
    color: white;
    transform: scale(1.06);
  }
`;
const TopicRec = styled.div`
  margin-top: 10px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;
const Recommend = styled.div`
  font-weight: bold;
  font-size: 20px;
  font-family: suisseworks;
  margin-top: 15px;
  margin-bottom: 20px;
  margin-left: 10px;
`;

const CourseCard = styled.div`
  height: 400px;
  width: 250px;
  background-color: yellow;
  margin-bottom: 50px;
`;
const First = styled.div`
  height: 40px;
  width: 150px;
  background-color: white;
  color: black;
  justify-content: center;
  align-items: center;
  display: flex;
  font-weight: bold;
  margin-right: 10px;
`;
const Second = styled.div`
  height: 40px;
  width: 70px;
  border: 1px solid white;
  color: white;
  justify-content: center;
  align-items: center;
  display: flex;
  font-weight: bold;
`;
const ButHold = styled.div`
  display: flex;
  margin-right: 5px;
`;
const Hold = styled.div`
  display: flex;

  span {
    font-weight: bold;
    margin-right: 20px;
    margin-left: 10px;
  }
`;
const Train = styled.div`
  margin-top: 20px;
  width: 100%;
  height: 60px;
  background-color: black;
  display: flex;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const Selection = styled.div`
  margin-bottom: 10px;
  font-size: 30px;
  font-weight: bold;
  font-family: suisseworks;
`;
const Picture = styled.img`
  flex-wrap: wrap;
  height: 390px;
  width: 400px;
  object-fit: contain;
  /* background-color: blue; */
`;
const Heading = styled.div`
  font-size: 25px;
  padding-top: 10px;
  font-weight: bold;
  padding-bottom: 10px;
`;
const Notes = styled.div`
  padding-bottom: 10px;
`;
const Inputed = styled(Input)`
  width: 100%;
  height: 50px;
`;
const Card = styled.div`
  margin-left: 30px;
  padding: 10px;
  height: 230px;
  width: 350px;
  background-color: white;
  box-shadow: 2px 0px 9px 0px rgba(0, 0, 0, 0.41);
  -webkit-box-shadow: 2px 0px 9px 0px rgba(0, 0, 0, 0.41);
  -moz-box-shadow: 2px 0px 9px 0px rgba(0, 0, 0, 0.41);

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const Card1 = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: unset;

    padding: 10px;
    height: 230px;
    width: 100%;
    background-color: white;
  }
`;
const Hero = styled.div`
  width: 100%;
  height: 400px;

  display: flex;
  align-items: center;
  background-color: #f7f7f7;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 10px;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
const Wrapper = styled.div`
  width: 80%;
  height: 100%;

  display: flex;
  flex-direction: column;
  /* align-items: center; */
  flex-wrap: wrap;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
const Container = styled.div`
  width: 98.5vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  /* background-color: blue; */
`;
