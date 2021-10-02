import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import styled from "styled-components";

const Description = () => {
  return (
    <Container>
      <Wrapper>
        <NewHolder>
          <Holder>
            <Head>development > Programmimg Languages > Python</Head>
            <Text>
              2021 Complete Python Bootcamp From Zero
              <br /> to Hero in Python
            </Text>
            <Text1>
              Learn Python like a Professional Start from the basics and go all
              the way to creating your own applications and games
            </Text1>
            <RatingHolder>
              <span>4.6</span>
              <Rating></Rating>
              <Rating></Rating>
              <Rating></Rating>
              <Rating></Rating>
              <Rating></Rating>
              <span> (383,626 ratings) 1,377,331 students</span>
            </RatingHolder>
            <div>Created by Jose Portillia</div>

            <VideoHolder>
              <Video></Video>
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
            <Text2>Description</Text2>
          </Box>
        </Describe>
      </DescribeHolder>
    </Container>
  );
};

export default Description;

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
  width: 600px;
  height: 300px;
  border: 1px solid grey;
  display: flex;
  @media screen and (max-width: 768px) {
    width: 700px;
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
`;
const Video = styled.div`
  width: 100%;
  height: 350px;
  background-color: lavender;
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
  flex-wrap: wrap;
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
