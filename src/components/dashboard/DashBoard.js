import React, { useState } from "react";
import { Col, Container,Row} from "react-bootstrap";
import { useDispatch } from "react-redux";
import { logoutIntiate } from "../../redux/actions/loginRegisterActions";
import { Calender } from "./Calender";
import { LeaderBoard } from "./LeaderBoard";
import { PerformanceChart } from "./PerformanceChart";
import { Heatmap } from '../heatmap/Heatmap.js';
import { TotalSubmission } from "./TotalSubmission";
import { NavBar } from "../NavBar";
export const DashBoard = () => {
  const dispatch = useDispatch();
  
  const handleLogout=()=>{
    console.log("in handle logout");
    dispatch(logoutIntiate());
  }
  const styling={
    'background-color':'#e3f2fd'
  }
  return (
    <div align="center">
      <NavBar/>
      <br/>
      <Container>
        <Row>
          <Col xs={12} md={12}>
            <div class="alert alert-success" role="alert">
              <b>Total number of questions submitted :<TotalSubmission/></b>
            </div>
          </Col>
        </Row>
          <Row>
              <Col xs={12} md={{ span: 4, offset:0}}><Calender/></Col>
              <Col xs={12} md={{ span: 8, offset: 0}}><LeaderBoard/></Col>
          </Row>
          <br/>
          <br/>
          <Row>
            <Col md={{span:12, offset:0}}>
                <PerformanceChart/>
            </Col>
          </Row>
          <br/>
          <br/>
          <Row>
            <Col md={12} xs={12}>
              <Heatmap/>
            </Col>
          </Row>
          <Row>
            <Col md={12} xs={12}>
              <hr/>
            </Col>
          </Row>
      </Container>
      
    </div>
  );

}
