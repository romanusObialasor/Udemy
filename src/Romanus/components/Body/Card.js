import React from "react";
import styled from "styled-components";
import { BsStarFill, BsStarHalf } from "react-icons/bs";

const Card = () => {
  return (
    <Container>
      <img src="/images/student.jpg" alt="woman" />
      <Title>The Complete 2021 Web Development Bootcamp</Title>
      <Teacher>Romanus Obialasr</Teacher>
      <Ratings>
        <NumRate>4.2</NumRate>
        <Rate>
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarHalf />
        </Rate>
        <Raters>(12,345)</Raters>
      </Ratings>
      <Price>$89</Price>
    </Container>
  );
};

export default Card;

const NumRate = styled.div``;

const Rate = styled.div`
  color: #e59819;
  font-size: 15px;
`;

const Raters = styled.div``;

const Container = styled.div`
  width: 250px;
  /* background-color: red; */
  height: 300px;
  img {
    width: 100%;
    height: 130px;
    object-fit: cover;
    border: 1px solid rgba(0, 0, 0, 0.2);
  }
`;

const Title = styled.div`
  font-family: "sf pro display", -apple-system, BlinkMacSystemFont, Roboto,
    "segoe ui", Helvetica, Arial, sans-serif, "apple color emoji",
    "segoe ui emoji", "segoe ui symbol";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #1c1d1f;
  margin-top: 5px;
`;

const Teacher = styled.div`
  font-size: 13px;
  color: #6a6f73;
  margin-top: 5px;
`;

const Ratings = styled.div`
  margin-top: 10px;
  display: flex;
  /* background-color: red; */
  justify-content: space-between;
  width: 190px;
  align-items: center;
`;

const Price = styled.div`
  margin-top: 10px;
  font-weight: bold;
`;

// const Container = styled.div``
// const Container = styled.div``
// const Container = styled.div``
// const Container = styled.div``
