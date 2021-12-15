import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import React from 'react'
import {useState,useRef,useEffect} from 'react';
import { useSelector } from 'react-redux';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import { getDatabase,ref, onValue } from "firebase/database";
import { ButtonGroup, Container } from 'react-bootstrap';
import { Row,Col,Card,Button} from 'react-bootstrap';
import './mainpage.css';
import { SinglePage } from './SinglePage';
import { Link } from 'react-router-dom';
export const MainPage = () => {

  const state = useSelector(state => state.userReducer);
  const [question, setquestion] = useState([]);
  const cardHelper=question.map((question)=>{
    return(
          <MyCard quename={question.quename}
          platform={question.platform}
          queurl={question.queurl}
          comment={question.comment}
          queid={question.id}
          />
    )
  })
  useEffect(() => {
    const db = getDatabase();
    console.log(state.selectedDate);
    console.log("path : ",'submission/',state.user.uid,'/',btoa(state.selectedDate.month+'/'+state.selectedDate.day+'/'+state.selectedDate.year));
    const todoRef = ref(db,'submission/'+state.user.uid+'/'+btoa(state.selectedDate.month+'/'+state.selectedDate.day+'/'+state.selectedDate.year));
    onValue(todoRef, (snapshot) => {
      const todos = snapshot.val();
      const todoList = [];
      console.log(todos);
      for (let id in todos) {
        console.log(todos[id]);
        todoList.push({ id, ...todos[id] });
      }
      setquestion(todoList);
    });

  }, [])
    return (
      <Container>
        <Row className = "tmp">
          <Col className = "tmp1">
            <Carousel responsive={responsive}>
              {cardHelper}
            </Carousel>
          </Col>
        </Row>
      </Container>
   
      
    )
}

//to make responsive
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};


//for card
const MyCard=({queid,quename,queurl,comment,platform})=>{
  const ref = useRef();
  return (
    <Flippy
      flipOnHover={false} // default false
      flipOnClick={true} // default false
      flipDirection="horizontal" // horizontal or vertical
      ref={ref} // to use toggle method like ref.curret.toggle()
      // if you pass isFlipped prop component will be controlled component.
      // and other props, which will go to div
    //   style={{ width: '90%',height:"500px",textAlign:"center",display: "flex",
    //   "justify-content": "center",
    //   "align-items": "center",
    //  }}
    className="flippy"
  >
    <FrontSide /*style={{background:"linear-gradient(135deg, #E3E3E3 0%,#5D6874 100%)"}}*/ >
      <Card className='flippy-card'>
        <Card.Header>{platform}</Card.Header>
        <Card.Body>
          <Card.Title>{quename}</Card.Title>
          <Card.Text style={{height:"270px",overflowY:"hidden"}}>
            {comment}
          </Card.Text>
            <ButtonGroup  style={{position:"absolute",bottom:2,right:1}}>
              <Button style={{borderRadius:"4px"}}variant="info" rounded><i class="fas fa-link"></i>Open Question</Button>
              <Link to={`/${queid}`}>
                <Button style={{marginLeft:"4px"}} variant="danger" rounded><i class="fas fa-edit"></i>Update Notes</Button>
              </Link> 
            </ButtonGroup>
        </Card.Body>
      </Card>
    </FrontSide>
    <BackSide>
        <div className="paper">
            <div className="paper-content">
                <p autofocus style={{overflowY:"hidden"}}>{comment}</p>
            </div>
        </div>
    </BackSide>
  </Flippy>
  )
}



