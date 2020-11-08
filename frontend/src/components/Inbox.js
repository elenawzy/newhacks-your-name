import React, { useEffect, useState } from "react";
import { Container, Row, Col, Modal } from "react-bootstrap";
import Navigation from "./Navigation";
import "./Dashboard.css";
import "./Inbox.css";
import LemonPie from './images/lemon-pie.jpg';
import Venti from './images/venti.jpg';
import { Button } from "react-bootstrap";

function Inbox() {
  const [oneshow, setoneShow] = useState(false);

  const handleoneClose = () => setoneShow(false);
  const handleoneShow = () => setoneShow(true);

  const [twoshow, settwoShow] = useState(false);

  const handletwoClose = () => settwoShow(false);
  const handletwoShow = () => settwoShow(true);

  return (
    <div>
      <Navigation />
      <Row>
        <Col className="column" xs={12} md={1}>
          <h5>inbox</h5>
        </Col>
        <Col className="column" xs={12} md={11}>
          <Button variant="light" size="lg" block className="column-element-1" onClick={handleoneShow}>
            from: amanda
          </Button>
          <Modal size="lg" show={oneshow} onHide={handleoneClose}>
            <Modal.Header closeButton className="grey-background">
              <Modal.Title>From: Amanda</Modal.Title>
            </Modal.Header>
            <Modal.Body className="blue-background">
            Dearest Jessica,
            <br/>
            <br/>
            It is snowing today! How is the weather where you are? I remember I told you that I wanted to try to bake a lemon pie, 
            and I tried it today, but I burnt it! Here’s an image:
            <br/>
            <br/>
            <img 
              src={LemonPie}     
            />{' '}
            <br/>
            <br/>
            Do you have any tips on getting better at this? I'm looking forward to talking to you again!
            <br/>
            <br/>
            Sincerely,
            <br/>
            Amanda
            </Modal.Body>
            <Modal.Footer className="grey-background">
              <Button variant="secondary" onClick={handleoneClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
          <Button variant="light" size="lg" block className="column-element-2">
            from: amanda
          </Button>
          <Button variant="light" size="lg" block className="column-element-1">
            from: amanda
          </Button>
          <Button variant="light" size="lg" block className="column-element-2" onClick={handletwoShow}>
            from: amanda
          </Button>
          <Modal size="lg" show={twoshow} onHide={handletwoClose}>
            <Modal.Header closeButton className="grey-background">
              <Modal.Title>From: Amanda</Modal.Title>
            </Modal.Header>
            <Modal.Body className="blue-background">
            Dearest Jessica,
            <br/>
            <br/>
            How are you! I had so much fun playing that new game with you yesterday. I just got this new character who is super cute!
            Do you have him too?
            <br/>
            <br/>
            <img 
              src={Venti}  
              width="750"
              height="400"   
            />{' '}
            <br/>
            <br/>
            Let's play again sometime!
            <br/>
            <br/>
            Sincerely,
            <br/>
            Amanda
            </Modal.Body>
            <Modal.Footer className="grey-background">
              <Button variant="secondary" onClick={handletwoClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
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
