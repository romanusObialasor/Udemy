import React, { useEffect, useState } from "react";
import { AiOutlineStar } from "react-icons/ai";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import app from "../base";
const Description = () => {
  const { id } = useParams();

  const [fetchData, setFetchData] = useState([]);

  const getData = async (id) => {
    await app
      .firestore()
      .collection("udemyCourses")
      .doc(id)
      .get()
      .then((user) => {
        setFetchData(user.data());
      });
  };
  useEffect(() => {
    getData(id);
    console.log(fetchData);
  }, []);
  return (
    <Container>
      <Wrapper>
        {/* <Pics src={fetchData.avatar}/> */}
        <NewHolder>
          <Holder>
            <Head>
              development > Programmimg Languages > {fetchData.category}
            </Head>
            <Text>{fetchData.title}</Text>
            <Text1>
              Learn Python like a Professional Start from the basics and go all
              the way to creating your own applications and games
            </Text1>
            <RatingHolder>
              <span>{fetchData.rate}</span>
              <Rating></Rating>
              <Rating></Rating>
              <Rating></Rating>
              <Rating></Rating>
              <Rating></Rating>
              <span> (383,626 ratings) 1,377,331 students</span>
            </RatingHolder>
            <div>Created by {fetchData.teacher}</div>

            <VideoHolder>
              <Video src={fetchData.avatar} />
              <Dollar>$89.99</Dollar>
              <Button>Add to Cart</Button>
              <Button1>Buy Now</Button1>
            </VideoHolder>
          </Holder>
        </NewHolder>
      </Wrapper>
      <DescribeHolder>
        <Describe>
          <Box>
            <span>{fetchData.category} Courses</span>
            <Text2>{fetchData.describe}</Text2>
          </Box>
        </Describe>
      </DescribeHolder>
    </Container>
  );
};

export default Description;
const Pics = styled.img`
  position: relative;
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
const Dollar = styled.div`
  color: black;
  font-weight: bold;
  font-size: 20px;
`;

const Button1 = styled.div`
  width: 80%;
  height: 50px;
  border: 1px solid black;
  //background-color: purple;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: poppins;
  font-weight: bold;
`;

const Text2 = styled.div`
  margin-top: 20px;
  font-size: 20px;
  color: black;
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Box = styled.div`
  width: 700px;
  height: 100%;
  text-align: justify;
  /* border: 1px solid grey; */
  /* display: flex; */
  @media screen and (max-width: 768px) {
    width: 700px;
  }

  span {
    font-size: 20px;
    font-weight: bold;
    text-transform: uppercase;
    display: flex;
  }
`;

const DescribeHolder = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  //justify-content: center;
  /* justify-content: center;
  align-items: center; */
  @media screen and (max-width: 768px) {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;

const Describe = styled.div`
  width: 90%;
  display: flex;
  margin-left: 60px;
  //justify-content: center;
  margin-top: 20px;
  @media screen and (max-width: 768px) {
    width: 90%;
    margin-left: 0px;
  }
  //background-color: red;
  //margin: 20px;
`;

const NewHolder = styled.div`
  width: 90%;
  display: flex;
  position: absolute;
`;
const Video = styled.img`
  width: 100%;
  height: 350px;
  background-color: lavender;
  object-fit: cover;
`;

const Button = styled.div`
  width: 80%;
  height: 50px;
  background-color: purple;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: poppins;
  font-weight: bold;
  font-size: 14px;
  color: white;
`;

const VideoHolder = styled.div`
  width: 350px;
  height: 600px;
  //background-color: red;
  border: 1px solid grey;
  position: absolute;
  right: 100px;
  top: 100px;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    display: none;
  } ;
`;

const RatingHolder = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  span {
    color: white;
  }
`;

const Rating = styled(AiOutlineStar)`
  color: orangered;
  font-weight: bold;
  font-size: 15px;
`;

const Text1 = styled.div`
  color: white;
  margin-top: 20px;
  font-size: 17px;
  /* min-width: 300px;
  width: 100%; */
  //text-align: center;
  flex-wrap: wrap;
  //width: 400px;
  //background-color: red;
`;

const Text = styled.div`
  font-weight: bold;
  font-size: 30px;
  color: white;
  margin-top: 20px;
  min-width: 200px;
  // width: 100%;
  //background-color: red;
`;

const Head = styled.div`
  font-family: Suisseworks;
`;

const Holder = styled.div`
  //min-width: 320px;
  width: 680px;
  //width: 650px; */
  color: blue;
  display: flex;
  margin-top: 30px;
  flex-direction: column;
  //align-items: center;
  //margin-left: 50px;
  //background-color: green;
  /* align-items: center;
  justify-content: center; */
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  height: auto;
  flex-wrap: wrap;
  margin-bottom: 70px;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  background-color: black;
  height: 380px;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 768px) {
    height: 450px;
  }
`;
