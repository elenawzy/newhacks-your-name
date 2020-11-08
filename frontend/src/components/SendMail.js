import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Navigation from "./Navigation";
import "./Dashboard.css";
import Editor from './Editor';


function SendMail() {
  return (
    <div>
      <Navigation/>
      <Row>
        <Col className="column" xs={12} md={1}>
          <h5>send mail</h5>
        </Col>
        <Col className="column" xs={12} md={11}>
          <Editor></Editor>
        </Col>
      </Row>
    </div>
  );
}

export default SendMail;
