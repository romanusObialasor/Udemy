import React from "react";
import styled from "styled-components";
import img from "./apple-light.svg";
import img1 from "./box-light.svg";
import img2 from "./volkswagen-light.svg";
import img3 from "./netflix-light.svg";
import img4 from "./eventbrite-light.svg";
import { AiOutlineGlobal } from "react-icons/ai";
// import img8 from "./logoUdemy.svg";

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <Holder>
          <TextHolder>
            <Text>Teach the world online</Text>
            <span>
              Create an online video course, reach students across the globe,
              and earn money
            </span>
          </TextHolder>
          <Button>Teach on Udemy</Button>
        </Holder>
        <Line></Line>
        <Holder>
          <TextHolder>
            <Text>
              Top companies choose <span>Udemy Business</span> to build
              in-demand career skills.
            </Text>
          </TextHolder>
          <Imageholder>
            <Image src={img} />
            <Image src={img1} />
            <Image src={img2} />
            <Image src={img3} />
            <Image src={img4} />
          </Imageholder>
        </Holder>
        <Line></Line>
        <Wrapper1>
          <ContentHolder>
            <AboutText>Udemy Business</AboutText>
            <Text1>Teach on Udemy</Text1>
            <Text2>Get the app</Text2>
            <Text3>About Us</Text3>
            <Text4>Contct Us</Text4>
          </ContentHolder>
          <ContentHolder>
            <AboutText>Careers</AboutText>
            <Text1>Blog</Text1>
            <Text2>Help and Support</Text2>
            <Text3>Affiliate</Text3>
          </ContentHolder>
          <ContentHolder>
            <AboutText>Terms</AboutText>
            <Text1>Privacy Policy</Text1>
            <Text2>Sitemap</Text2>
          </ContentHolder>
          <ButtonHolder>
            <ButtonBlog>
              <Icon>
                <AiOutlineGlobal />
              </Icon>
              English
            </ButtonBlog>
          </ButtonHolder>
        </Wrapper1>
        <Holder1>
          <Logo src="/images/logo-udemy.svg" />
          <Date>© 2021 Udemy, Inc.</Date>
        </Holder1>
      </Wrapper>
    </Container>
  );
};

export default Footer;

const Wrapper1 = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  color: white;
  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    margin: 0;
    width: 100%;
    margin-left: 10px;
    padding: 30px;
    padding-top: 10px;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
  }
`;

const Container = styled.div`
  height: auto;
  width: 100%;
  background-color: #1c1d1f;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const Holder = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;
  @media screen and (max-width: 760px) {
    flex-direction: column;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

const Text = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: white;
  span {
    color: #cec0fc;
  }
`;

const TextHolder = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 50px;

  span {
    flex: 1;
    color: white;
    font-size: 17px;
  }
  @media screen and (max-width: 760px) {
    width: 300px;
  }
`;

const Button = styled.div`
  height: 50px;
  width: 150px;
  background-color: transparent;
  border: 1px solid lightgray;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: bold;
  margin-right: 50px;
  cursor: pointer;
  @media screen and (max-width: 760px) {
    margin-left: 50px;
  }
`;

const Line = styled.div`
  border: 1px solid lightgray;
  width: 100%;
  margin-top: 20px;
`;

const Imageholder = styled.div`
  margin-right: 30px;
  display: flex;
  justify-content: space-around;
  width: 30%;
  @media screen and (max-width: 760px) {
    width: 350px;
    margin-left: 20px;
  }
`;

const Image = styled.img`
  object-fit: contain;
  width: 60px;
`;

const Text1 = styled.div``;

const Text2 = styled.div``;

const Text3 = styled.div``;

const Text4 = styled.div``;

const ContentHolder = styled.div``;

const AboutText = styled.div`
  font-weight: bold;
  font-size: 15px;
  padding-bottom: 10px;
`;

const ButtonBlog = styled.div`
  height: 50px;
  width: 150px;
  background-color: transparent;
  border: 1px solid lightgray;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: white;
  font-weight: bold;
  @media screen and (max-width: 760px) {
    display: none;
  }
`;

const ButtonHolder = styled.div`
  margin-left: 45%;
`;

const Icon = styled(AiOutlineGlobal)`
  font-size: 30px;
`;

const Holder1 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
`;

const Logo = styled.img`
  width: 8%;
  padding-left: 30px;
  @media screen and (max-width: 760px) {
    width: 20%;
  }
`;

const Date = styled.div`
  padding-right: 30px;
  color: white;
  @media screen and (max-width: 760px) {
    display: none;
  }
`;
