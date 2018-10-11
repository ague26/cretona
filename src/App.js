import React, { Component } from 'react';
import './App.css';
import {Grid , Row, Col, Nav, NavItem } from 'react-bootstrap';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      activeKey: '',
    };

  }

   handleSelect(eventKey, event) {
        this.setState({
          activeKey: eventKey,
        })
  }


  render() {


    return (
      <Grid>
        <Row>
          <Nav bsStyle="tabs" activeKey={this.state.activeKey} onSelect={k => this.handleSelect(k)}>
            <NavItem eventKey="1" role="/title">
              Who Am I 
            </NavItem>
            <NavItem eventKey="2" role="body">
              Body
            </NavItem>
            <NavItem eventKey="3" role="contact">
              Contact
            </NavItem>
            <NavItem eventKey="4" role="payment">
              Payment
            </NavItem>
          </Nav>

          <Col id="title">
            <p>Alexander Guevara</p>   
          </Col>
          <Col id="body">
          
          </Col>
          <Col id="contact">
          
          </Col>
          <Col id="payment">
          
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
