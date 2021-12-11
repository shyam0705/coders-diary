import React, { useState } from "react";
import { Col, Container,Row} from "react-bootstrap";
import { useDispatch } from "react-redux";
import { logoutIntiate } from "../../redux/actions/loginRegisterActions";
import { Calender } from "./Calender";
import { LeaderBoard } from "./LeaderBoard";
import { PerformanceChart } from "./PerformanceChart";
export const DashBoard = () => {
  const dispatch = useDispatch();
  
  const handleLogout=()=>{
    console.log("in handle logout");
    dispatch(logoutIntiate());
  }
  return (
    <>
      <button onClick={handleLogout}>Logout</button>
      <Container>
          <Row>
              <Col xs={12} md={{ span: 4, offset:0}}><Calender/></Col>
              <Col xs={12} md={{ span: 8, offset: 0}}><PerformanceChart/></Col>
          </Row>
          <LeaderBoard/>
      </Container>
      
    </>
  );

}
