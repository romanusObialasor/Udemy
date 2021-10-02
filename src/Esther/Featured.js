import React, { useState,useEffect } from 'react'
import styled from 'styled-components'
import app from "../base"

const Featured = () => {
    const [one, setOne] = useState([])

    const fetchOne = async () => {
        await app
          .firestore()
          .collection("udemyCourses")
          .limit(1)
          .onSnapshot((snap) => {
            const item = [];
            snap.forEach((doc) => {
              item.push({ ...doc.data(), id: doc.id });
            });
            setOne(item);
          });
      };


      useEffect(() => {
        fetchOne();
      
        console.log("this is the data", one);
        
        }, []);
    
    return (
       <Container>
             <Recommend>Featured For You</Recommend>

{
    one.map(({id, avatar,title, rate,amount, teacher})=>(
        <Wrapper key={id}>
    <Pictures src={avatar}/>
    <Paragraph> 
    <Title>{title}</Title>
  <Teacher>{teacher}</Teacher>
  <Small> Web Development Development Has Been on the Increase For the Past Ten Years
  With Notes and Annotations you can easily add notes based on provided templates or create your own look and feel. 
  With two simple buttons you can easily
  </Small>
  <Rate>{rate}</Rate>
  <Price>{amount}</Price>
    </Paragraph>

</Wrapper>
    ))
}
       </Container>
    )
}

export default Featured
const Recommend= styled.div`
font-weight:bold;
font-family: suisseworks;
font-size: 20px;
`;
const Small = styled.div`
font-size: 15px;
`;
const Price = styled.div`
font-weight: bold;
font-size: 15px;
`
const Rate = styled.div`
font-weight: 500;
flex: 1;
`;
const Teacher = styled.div`
font-weight: bold;
`;
const Title = styled.div`
/* width: 250px; */
font-size: 30px;
font-weight: bold;
`;



const Paragraph= styled.div`
width: 400px;
`;
const Pictures = styled.img`
height: 250px;
width: 500px;
background-color: red;
object-fit: cover;
`
const Wrapper = styled.div`
flex-wrap: wrap;
width: 100%;
height:100%;
display: flex;
padding: 20px;
align-items: center;
justify-content:space-around;
border: 1px solid black;
`;
const Container = styled.div`
flex-wrap: wrap;
width: 100%;
height: 100%;
margin-top: 20px;
`;
