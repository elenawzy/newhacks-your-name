import React from "react";
import { Row, Col } from "react-bootstrap";
import Navigation from "./Navigation";
import "./Dashboard.css";
import Editor from './Editor';
import SimpleMenu from "./Menu";
import Button from '@material-ui/core/Button';
import {Link, Redirect, withRouter} from 'react-router-dom';

function SendMail() {
  return (
    <div>
      <Navigation/>
      <Row>
        <Col className="column" xs={12} md={1}>
          <h5>send mail</h5>
          <SimpleMenu></SimpleMenu>
        </Col>
        <Col className="column" xs={12} md={11}>
          
          <Editor></Editor>
          <Link to="/dashboard"><Button>Send</Button></Link>
          
        </Col>
      </Row>
    </div>
  );
}

export default SendMail;
