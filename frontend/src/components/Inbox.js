import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Navigation from "./Navigation";
import "./Dashboard.css";
import { Button } from "react-bootstrap";

function Inbox() {
  return (
    <div>
      <Navigation/>
      <Row>
        <Col className="column" xs={12} md={1}>
          <h5>inbox</h5>
        </Col>
        <Col className="column" xs={12} md={11}>
          <Button variant="light" size="lg" block className="column-element-1">
            from: amanda
          </Button>
          <Button variant="light" size="lg" block className="column-element-2">
            from: amanda
          </Button>
          <Button variant="light" size="lg" block className="column-element-1">
            from: amanda
          </Button>
          <Button variant="light" size="lg" block className="column-element-2">
            from: amanda
          </Button>
          <Button variant="light" size="lg" block className="column-element-1">
            from: amanda
          </Button>
          <Button variant="light" size="lg" block className="column-element-2">
            from: amanda
          </Button>
        </Col>
      </Row>
    </div>
  );
}

export default Inbox;
