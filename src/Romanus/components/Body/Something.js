import React from "react";
import styled from "styled-components";

const Something = () => {
  return (
    <Container>
      <Wrapper>
        <Head>Trusted by companies of all sizes</Head>
        <Images>
          <Image src="/images/apple.svg" />
          <Image src="/images/box.svg" />
          <Image src="/images/volkswagen.svg" />
          <Image src="/images/netflix.svg" />
        </Images>
      </Wrapper>
    </Container>
  );
};

export default Something;

const Container = styled.div`
  width: 100%;
  height: 170px;
  background-color: #f7f9fa;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  display: flex;
  /* background-color: hotpink; */
  width: 500px;
  height: 100%;
  min-width: 300px;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;
const Head = styled.div`
  font-family: SuisseWorks, Georgia, Times, "times new roman", serif,
    "apple color emoji", "segoe ui emoji", "segoe ui symbol";
  font-style: normal;
  font-weight: 700;
  font-size: 27px;
  line-height: 32px;
  color: #1c1d1f;
`;
const Images = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const Image = styled.img`
  width: 70px;
`;
// const Container = styled.div``
// const Container = styled.div``
