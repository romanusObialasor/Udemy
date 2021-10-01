import React from "react";
import styled from "styled-components";

const HeaderNav = () => {
  return (
    <Container>
      <Cancel>x</Cancel>
      <Wrapper></Wrapper>
    </Container>
  );
};

export default HeaderNav;

const Container = styled.div`
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 640px;
  background-color: rgba(0, 0, 0, 0.7);
`;

const Wrapper = styled.div`
  width: 300px;
  background-color: red;
  height: 640px;
`;

const Cancel = styled.div`
  position: absolute;
  right: 40px;
  top: 20px;
`;

// const Container = styled.div``
// const Container = styled.div``
// const Container = styled.div``
// const Container = styled.div``
// const Container = styled.div``
// const Container = styled.div``
// const Container = styled.div``
// const Container = styled.div``
// const Container = styled.div``
// const Container = styled.div``
