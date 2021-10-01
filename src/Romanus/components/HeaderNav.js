import React from "react";
import styled from "styled-components";
import { MdExpandMore } from "react-icons/md";
import { VscGlobe } from "react-icons/vsc";

const HeaderNav = ({ toggle }) => {
  return (
    <>
      <Cancel onClick={toggle}>x</Cancel>
      <Wrapper>
        <Top>
          <span>Log In</span>
          <span>Sign Up</span>
        </Top>
        <Rest>
          <Header>Most Popular</Header>
          <span>
            Web Development{" "}
            <MdExpandMore
              style={{
                transform: "rotate(-90deg)",
              }}
            />
          </span>
          <span>
            Mobile Development
            <MdExpandMore
              style={{
                transform: "rotate(-90deg)",
              }}
            />
          </span>
          <span>
            Game Development
            <MdExpandMore
              style={{
                transform: "rotate(-90deg)",
              }}
            />
          </span>
          <span>
            EnterPreneurship
            <MdExpandMore
              style={{
                transform: "rotate(-90deg)",
              }}
            />
          </span>
          <span>
            Digital
            <MdExpandMore
              style={{
                transform: "rotate(-90deg)",
              }}
            />
          </span>
          <span>Graphic Design</span>
          <span>
            IT Certification
            <MdExpandMore
              style={{
                transform: "rotate(-90deg)",
              }}
            />
          </span>
          <span>
            Personal Transformation
            <MdExpandMore
              style={{
                transform: "rotate(-90deg)",
              }}
            />
          </span>
          <span>
            All Categories
            <MdExpandMore
              style={{
                transform: "rotate(-90deg)",
              }}
            />
          </span>
        </Rest>
        <More>
          <Header>More from Udemy</Header>
          <span>Udemy Business</span>
          <span>Get App</span>
          <span>Invite Friends</span>
          <span>Help</span>
          <Lang>
            <VscGlobe />
            <span>English</span>
          </Lang>
        </More>
      </Wrapper>
    </>
  );
};

export default HeaderNav;

const Wrapper = styled.div`
  width: 300px;
  height: 100%;
  background-color: white;
  overflow-y: scroll;
  position: absolute;

  span {
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: rgba(0, 0, 0, 0.7);
    font-weight: 600;
  }
`;
const Cancel = styled.div`
  position: fixed;
  right: 20px;
  top: 40px;
  background-color: white;
  /* padding: 20px; */
  width: 40px;
  height: 40px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 17px;
  /* cursor: pointer; */
`;

const Top = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100px;
  box-shadow: 0.1px 1px rgba(0, 0, 0, 0.2);
  padding-left: 15px;
  justify-content: space-around;
  span {
    color: #a58ae6;
  }
`;
const Rest = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 400px;
  box-shadow: 0.1px 1px rgba(0, 0, 0, 0.2);
  padding-left: 15px;
  justify-content: space-around;
  span {
    /* color: #a58ae6; */
  }
`;
const Header = styled.div`
  font-weight: 600;
  color: gray;
`;
const More = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 300px;
  box-shadow: 0.1px 1px rgba(0, 0, 0, 0.2);
  padding-left: 15px;
  justify-content: space-around;
  span {
    /* color: #a58ae6; */
  }
`;
const Lang = styled.div`
  width: 50%;
  border: 1px solid black;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  span {
    font-size: 17px;
    margin-right: -40px;
    /* background-color: red; */
    margin-left: 10px;
  }
`;
// const Container = styled.div``
