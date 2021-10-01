import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { VscGlobe } from "react-icons/vsc";
import HeaderNav from "./HeaderNav";
import Fade from "react-reveal/Fade";

const HeaderMain = () => {
  const [show, setShow] = useState(false);
  const toggle = () => {
    setShow(!show);
  };
  return (
    <>
      {show ? (
        <Position>
          <HeaderNav toggle={toggle} />
        </Position>
      ) : null}
      {/* <Fade left when={show}>
        <Position>
          <HeaderNav toggle={toggle} />
        </Position>
      </Fade> */}
      <Header>
        <Container>
          <Wrapper>
            <Menu>
              <FiMenu onClick={toggle} />
            </Menu>
            <Logo src="/images/logo-udemy.svg" />
            <span>Categories</span>
            <Search>
              <AiOutlineSearch />
              <SearchInput placeholder="Search for anything" />
            </Search>
            <span>Udemy Budiness</span>
            <span>Teach on Udemy</span>
            <Cart>
              <Menu>
                <AiOutlineSearch />
              </Menu>
              <HiOutlineShoppingCart />
            </Cart>
            <Login>Log in</Login>
            <SignUp>SignUp</SignUp>
            <Lang>
              <VscGlobe />
            </Lang>
          </Wrapper>
        </Container>
      </Header>
    </>
  );
};

export default HeaderMain;
const Header = styled.div`
  z-index: -1;
  position: relative;
`;

const Position = styled.div`
  position: absolute;
  z-index: 10000;
  width: 100%;
  height: 100%;
  background: red;
  z-index: 1;
`;

const Container = styled.div`
  width: 100%;
  /* z-index: -1;
  position: relative; */
  height: 70px;
  /* background-color: red; */
  display: flex;
  justify-content: center;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);
`;

const Wrapper = styled.div`
  display: flex;
  /* background-color: green; */
  height: 100%;
  width: 95%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  /* z-index: -1; */

  span {
    font-size: 14px;
    cursor: pointer;
    :hover {
      color: #a58ae6;
    }
    @media screen and (max-width: 768px) {
      display: none;
    }
  }
  @media screen and (max-width: 768px) {
    padding-left: 10px;
    padding-right: 10px;
  }
`;

const Logo = styled.img`
  height: 45%;
`;

const Search = styled.div`
  height: 67%;
  width: 45%;
  background-color: green;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f7f9fa;
  border-radius: 60px;
  border: 1px solid black;
  padding-left: 13px;
  font-size: 23px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Cart = styled.div`
  font-size: 25px;
  cursor: pointer;
  display: flex;
  /* background-color: red; */
  width: 70px;
  justify-content: space-between;
  :hover {
    color: #a58ae6;
  }
`;

const Login = styled.div`
  border: 1px solid black;
  width: 75px;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
  :hover {
    background-color: #f5f5f5;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const SignUp = styled.div`
  border: 1px solid black;
  width: 75px;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
  background-color: black;
  color: white;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Lang = styled.div`
  border: 1px solid black;
  width: 40px;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
  font-size: 20px;
  :hover {
    background-color: #f5f5f5;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const SearchInput = styled.input`
  background-color: transparent;
  flex: 1;
  margin-left: 13px;
  border: none;
  outline: none;
  height: 100%;
  font-size: 15px;
`;

const Menu = styled.div`
  font-size: 25px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
