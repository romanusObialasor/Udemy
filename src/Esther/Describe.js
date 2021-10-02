import React,{useEffect,useState} from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import app from "../base"
import { BsStarFill, BsStarHalf } from "react-icons/bs";

const Describe = () => {

    const [css, setCss] = useState([])
    const [java,setJava] = useState([])
    const [react, setReact] = useState([])
    const [node, setNode] = useState([])
    const [xd, setXd] = useState([])
    const [html,setHtml] = useState([])
    const [python,setPython] = useState([])

const [clickcss, setClickcss] = useState(false)
const [clickjava, setClickjava] = useState(false)
const [clickreact, setClickreact] = useState(false)
const [clicknode, setClicknode] = useState(false)
const [clickxd, setClickxd] = useState(false)
const [clickhtml, setClickhtml] = useState(false)
const [clickpython, setClickpython] = useState(false)


const handleCss = () => {
    setClickcss(true)
    setClickjava(false)
    setClickreact(false)
    setClickxd(false)
    setClickhtml(false)
    setClickpython(false)
    setClicknode(false)
  ;
  };

const handleJava = () => {
    setClickcss(false)
    setClickjava(true)
    setClickreact(false)
    setClickxd(false)
    setClickhtml(false)
    setClickpython(false)
    setClicknode(false)
  ;
  };
const handleReact = () => {
    setClickcss(false)
    setClickjava(false)
    setClickreact(true)
    setClickxd(false)
    setClickhtml(false)
    setClickpython(false)
    setClickpython(false)
  ;
  };

const handleXd = () => {
    setClickcss(false)
    setClickjava(false)
    setClickreact(false)
    setClickxd(true)
    setClickhtml(false)
    setClickpython(false)
    setClicknode(false)
  ;
  };

const handleHtml = () => {
    setClickcss(false)
    setClickjava(false)
    setClickreact(false)
    setClickxd(false)
    setClickhtml(true)
    setClickpython(false)
    setClicknode(false)
  ;
  };

const handlePython = () => {
    setClickcss(false)
    setClickjava(false)
    setClickreact(false)
    setClickxd(false)
    setClickhtml(false)
    setClickpython(true)
    setClicknode(false)
  ;
  };

const handleNode = () => {
    setClickcss(false)
    setClickjava(false)
    setClickreact(false)
    setClickxd(false)
    setClickhtml(false)
    setClickpython(false)
    setClicknode(true)
  ;
  };




    const fetchCssData = async () => {
        await app
          .firestore()
          .collection("udemyCourses")
          .orderBy("category")
          .startAt("css")
          .endAt("css")
          .onSnapshot((snap) => {
            const item = [];
            snap.forEach((doc) => {
              item.push({ ...doc.data(), id: doc.id });
            });
            setCss(item);
          });
      };


      const fetchJavaData = async () => {
        await app
          .firestore()
          .collection("udemyCourses")
          .orderBy("category")
          .startAt("javascript")
          .endAt("javascript")
          .onSnapshot((snap) => {
            const item = [];
            snap.forEach((doc) => {
              item.push({ ...doc.data(), id: doc.id });
            });
            setJava(item);
          });
      };

      const fetchReactData = async () => {
        await app
          .firestore()
          .collection("udemyCourses")
          .orderBy("category")
          .startAt("react")
          .endAt("react")
          .onSnapshot((snap) => {
            const item = [];
            snap.forEach((doc) => {
              item.push({ ...doc.data(), id: doc.id });
            });
            setReact(item);
          });
      };

      const fetchNodeData = async () => {
        await app
          .firestore()
          .collection("udemyCourses")
          .orderBy("category")
          .startAt("node")
          .endAt("node")
          .onSnapshot((snap) => {
            const item = [];
            snap.forEach((doc) => {
              item.push({ ...doc.data(), id: doc.id });
            });
            setNode(item);
          });
      };

      const fetchXdData = async () => {
        await app
          .firestore()
          .collection("udemyCourses")
          .orderBy("category")
          .startAt("xd")
          .endAt("xd")
          .onSnapshot((snap) => {
            const item = [];
            snap.forEach((doc) => {
              item.push({ ...doc.data(), id: doc.id });
            });
            setXd(item);
          });
      };

      const fetchHtmlData = async () => {
        await app
          .firestore()
          .collection("udemyCourses")
          .orderBy("category")
          .startAt("html")
          .endAt("html")
          .onSnapshot((snap) => {
            const item = [];
            snap.forEach((doc) => {
              item.push({ ...doc.data(), id: doc.id });
            });
            setHtml(item);
          });
      };


      const fetchPythonData = async () => {
        await app
          .firestore()
          .collection("udemyCourses")
          .orderBy("category")
          .startAt("python")
          .endAt("python")
          .onSnapshot((snap) => {
            const item = [];
            snap.forEach((doc) => {
              item.push({ ...doc.data(), id: doc.id });
            });
            setPython(item);
          });
      };



useEffect(()=>{
    fetchCssData()
    fetchJavaData()
    fetchXdData()
    fetchNodeData()
    fetchHtmlData()
    fetchPythonData()
    fetchReactData()
    console.log("this is the data", css);
})

    return (
     <Container>
<Wrapper>
<TopicRec> 
                 
             <Holders onClick={handleJava}>
                 Javascript
             </Holders>
           
             <Holders onClick={handlePython}>
                Python
             </Holders>
             <Holders onClick={handleCss}>
                 CSS
             </Holders>
             <Holders onClick={handleReact}>
                Reactjs
             </Holders>
             <Holders onClick={handleNode}>
               Nodejs
             </Holders>
             <Holders onClick={handleHtml}>
             HTML
             </Holders>
             <Holders onClick={handleXd}>
             XD
             </Holders>
             </TopicRec>

<Courses>
{
    clickcss ?(
        <>
        {
    css.map(({id, avatar,title, rate,amount, teacher})=>(
        <Wrappered key={id}>
    <Pictures src={avatar}/>
    <Paragraph> 
    <Title>{title}</Title>
  <Teacher>{teacher}</Teacher>
  <Small> Web Development Development Has Been on the Increase For the Past Ten Years
  With Notes and Annotations you can easily add notes based on provided templates or create your own look and feel. 
    </Small>
  <Rater>{rate}  <Rate>
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarHalf />
        </Rate> </Rater>
        <Price1>{amount}</Price1>
    </Paragraph>
    <Price>{amount}</Price>
</Wrappered>
    ))
}
        </>
    ):(
        <>
        {
            clickhtml ?(
                <>
                
                {
    html.map(({id, avatar,title, rate,amount, teacher})=>(
        <Wrappered key={id}>
    <Pictures src={avatar}/>
    <Paragraph> 
    <Title>{title}</Title>
  <Teacher>{teacher}</Teacher>
  <Small> Web Development Development Has Been on the Increase For the Past Ten Years
  With Notes and Annotations you can easily add notes based on provided templates or create your own look and feel. 
    </Small>
  <Rater>{rate}  <Rate>
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarHalf />
        </Rate> </Rater>
        <Price1>{amount}</Price1>
    </Paragraph>
    <Price>{amount}</Price>
</Wrappered>
    ))
}
                </>
            ) :(
                <>
                {
                    clickjava ?(
                        <>
                        {
    java.map(({id, avatar,title, rate,amount, teacher})=>(
        <Wrappered key={id}>
    <Pictures src={avatar}/>
    <Paragraph> 
    <Title>{title}</Title>
  <Teacher>{teacher}</Teacher>
  <Small> Web Development Development Has Been on the Increase For the Past Ten Years
  With Notes and Annotations you can easily add notes based on provided templates or create your own look and feel. 
    </Small>
  <Rater>{rate}  <Rate>
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarHalf />
        </Rate> </Rater>
        <Price1>{amount}</Price1>
    </Paragraph>
    <Price>{amount}</Price>
</Wrappered>
    ))
}
                        </>
                    ) :(
<>
{
    clicknode ? (
        <>
        {
    node.map(({id, avatar,title, rate,amount, teacher})=>(
        <Wrappered key={id}>
    <Pictures src={avatar}/>
    <Paragraph> 
    <Title>{title}</Title>
  <Teacher>{teacher}</Teacher>
  <Small> Web Development Development Has Been on the Increase For the Past Ten Years
  With Notes and Annotations you can easily add notes based on provided templates or create your own look and feel. 
    </Small>
  <Rater>{rate}  <Rate>
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarHalf />
        </Rate> </Rater>
        <Price1>{amount}</Price1>
    </Paragraph>
    <Price>{amount}</Price>
</Wrappered>
    ))
}
        </>
    ): (
        <>
        {

            clickpython ? (

                <>
                {
    python.map(({id, avatar,title, rate,amount, teacher})=>(
        <Wrappered key={id}>
    <Pictures src={avatar}/>
    <Paragraph> 
    <Title>{title}</Title>
  <Teacher>{teacher}</Teacher>
  <Small> Web Development Development Has Been on the Increase For the Past Ten Years
  With Notes and Annotations you can easily add notes based on provided templates or create your own look and feel. 
    </Small>
  <Rater>{rate}  <Rate>
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarHalf />
        </Rate> </Rater>
        <Price1>{amount}</Price1>
    </Paragraph>
    <Price>{amount}</Price>
</Wrappered>
    ))
}
                
                
                </>
            ) :(
                <>
                {
                    clickreact ?(
                        <>
                        {
    react.map(({id, avatar,title, rate,amount, teacher})=>(
        <Wrappered key={id}>
    <Pictures src={avatar}/>
    <Paragraph> 
    <Title>{title}</Title>
  <Teacher>{teacher}</Teacher>
  <Small> Web Development Development Has Been on the Increase For the Past Ten Years
  With Notes and Annotations you can easily add notes based on provided templates or create your own look and feel. 
    </Small>
  <Rater>{rate}  <Rate>
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarHalf />
        </Rate> </Rater>
        <Price1>{amount}</Price1>
    </Paragraph>
    <Price>{amount}</Price>
</Wrappered>
    ))
}
                        </>
                    ) :(
                        <>
                        {
    xd.map(({id, avatar,title, rate,amount, teacher})=>(
        <Wrappered key={id}>
    <Pictures src={avatar}/>
    <Paragraph> 
    <Title>{title}</Title>
  <Teacher>{teacher}</Teacher>
  <Small> Web Development Development Has Been on the Increase For the Past Ten Years
  With Notes and Annotations you can easily add notes based on provided templates or create your own look and feel. 
    </Small>
  <Rater>{rate}  <Rate>
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarHalf />
        </Rate> </Rater>
        <Price1>{amount}</Price1>
    </Paragraph>
    <Price>{amount}</Price>
</Wrappered>
    ))
}
                            
                
                        </>
                    )
                }
                
                </>
            )
        }
        </>
    )
}
</>

                    )
                }
                </>
            )
        }
        
        </>
    )
}
</Courses>
 
</Wrapper>
     </Container>
    )
}

export default Describe
const Learn = styled.div``;

const Rate = styled.div`
  color: #e59819;
  font-size: 15px;
`;
const Recommend= styled.div`
font-weight:bold;
font-family: suisseworks;
font-size: 20px;
`;
const Small = styled.div`
font-size: 12px;
`;
const Price = styled.div`
font-weight: bold;
font-size: 17px;

@media sreen and (max-width:768px){
    display: none;
}
`
const Price1 = styled.div`
 display: none;
@media sreen and (max-width:768px){
    display: unset;
    font-weight: bold;
font-size: 17px;
}
`
const Rater = styled.div`
font-weight: 800;
display: flex;
`;
const Teacher = styled.div`
font-weight: bold;
`;
const Title = styled.div`
/* width: 250px; */
font-size: 20px;
font-weight: bold;
`;



const Paragraph= styled.div`
width: 500px;
/* flex: 1; */
`;
const Pictures = styled.img`
height: 100px;
width: 200px;
/* background-color: red; */
object-fit: cover;
`
const Wrappered = styled.div`
margin-top: 30px;
flex-wrap: wrap;
width: 70%;
height:100%;
display: flex;
/* padding: 20px; */
align-items: center;
justify-content:space-around;
border-bottom: 1px solid black;
`;



const Courses = styled.div`
margin-top: 30px;
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
`;
const Holders = styled.div`
text-decoration:none;
height: 50px;
width: 150px;
border: 1px solid black;
justify-content: center;
align-items: center;
display: flex;
font-size: 20px;
font-weight: 600;
border-radius: 2px;
transform: scale(1);
transition: all 350ms;
margin: 5px;
:hover{
cursor: pointer;
background-color: gray;
color: white;
transform: scale(1.06);
}
`;
const TopicRec = styled.div`
margin-top: 10px;
width: 100%;
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
`;

const Wrapper= styled.div`
width: 90%;
height: 100%;
display: flex;
flex-direction: column;
/* align-items: center; */
justify-content: center;

`;
const Container = styled.div`
width: 100vw;
height: 100%;
display: flex;
justify-content: center;
`;