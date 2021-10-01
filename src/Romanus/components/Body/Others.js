import React from "react";
import styled from "styled-components";
import { BsFillPlayFill, BsFillStarFill } from "react-icons/bs";
import { CgInfinity } from "react-icons/cg";

const Others = () => {
  return (
    <Container>
      <Wrapper>
        <Button>
          <BsFillPlayFill />
        </Button>
        <Text>Learn in-demand skills with over 155,000 video courses</Text>
      </Wrapper>
      <Wrapper>
        <Button>
          <BsFillStarFill />
        </Button>
        <Text>Choose courses taught by real-world experts</Text>
      </Wrapper>
      <Wrapper>
        <Button>
          <CgInfinity />
        </Button>
        <Text>
          Learn at your own pace, with lifetime access on mobile and desktop
        </Text>
      </Wrapper>
    </Container>
  );
};

export default Others;

const Container = styled.div`
  width: 100%;
  background-color: #f7f9fa;
  /* background-color: red; */
  height: 100px;
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
`;
const Wrapper = styled.div`
  /* background-color: green; */
  display: flex;
  align-items: center;
  /* width: 300px; */
`;
const Button = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  width: 50px;
  height: 50px;
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
`;
const Text = styled.div`
  margin-left: 15px;
  width: 300px;
  font-size: 17px;
  font-weight: 600;
`;
