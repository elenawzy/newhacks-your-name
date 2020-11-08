import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import DashNav from "./DashNav";
import './Dashboard.css';
import DashboardPic from './images/dashboard-pic.png';
import {Button} from 'react-bootstrap';

function Dashboard() {
  return (
    <div>
      <DashNav />
        <Row>
          <Col className="column" xs={12} md={4}>
            <h3>Welcome back, Jessica</h3>
            <Button variant="light" size="lg" block className="column-element">send a letter</Button>
            <Button variant="light" size="lg" block className="column-element">inbox</Button>
            <Button variant="light" size="lg" block className="column-element">profile</Button>
            <Button variant="light" size="lg" block className="column-element">pen pals</Button>
          </Col>
          <Col className="column" xs={12} md={8}>
              <img
              src={DashboardPic}
              />{' '}
          </Col>
        </Row>
    </div>
  );
}

export default Dashboard;
