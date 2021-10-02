import React from "react";
import styled from "styled-components";
import Main from "./components/Body/Main";
import Others from "./components/Body/Others";
import PropsCom from "./components/Body/PropsCom";
import Something from "./components/Body/Something";
import Land from "./components/Land";

const HomeScreen = () => {
  return (
    <Container>
      <Land />
      <Main />
      <PropsCom
        text="Instructors from around the world teach millions of students on Udemy. We provide the tools and skills to teach what you love."
        head="Become an instructor"
        button="start teaching today"
        image="/images/instructors/instructor1.jpg"
        rv
      />
      <Something />
      <PropsCom
        text="Get unlimited access to 6,000+ of Udemy’s top courses for your team. Learn and improve skills across business, tech, design, and more."
        button="Get Udemy Business"
        image="/images/instructors/instructor2.jpg"
        hd
      />
      <PropsCom
        head="Transform your life through education"
        text="Get unlimited access to 6,000+ of Udemy’s top courses for your team. Learn and improve skills across business, tech, design, and more."
        button="Get Udemy Business"
        image="/images/undraw/undraw1.jpg"
        rv
      />
    </Container>
  );
};

export default HomeScreen;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 50px;
`;
