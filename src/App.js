import React, { Component } from 'react';
import './App.css';
import {Grid , Row, Col} from 'react-bootstrap';
import Scroll from 'react-scroll';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import StripeCheckout from 'react-stripe-checkout';
import Box from './box';
import Button from './button';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      name:'',
      email: '',
      message:''
    };
    this.updateBox = this.updateBox.bind(this);
  }

  onToken = (token) => {
    fetch('/save-stripe-token', {
      method: 'POST',
      body: JSON.stringify(token),
    }).then(response => {
      response.json().then(data => {
        alert(`We are in business, ${data.email}`);
      });
    });
  }

  updateBox(box, value){
    this.setState({[box]: value})
  }


  render() {


    return (
      <Grid>
        <Row>
          <Row style={{background: 'yellow', }}>
            <Col xs={3}>
              <Link activeClass="active" to="title" smooth={true} duration={500}>
                My Name
              </Link>
            </Col>
            <Col xs={3}>
              <Link activeClass="active" to="body"  smooth={true} duration={500}>
                Who Am I
              </Link>
            </Col>
            <Col xs={3}>
              <Link activeClass="active" to="contact" smooth={true} duration={500}>
                Write To Me
              </Link>
            </Col>
            <Col xs={3}>
              <Link activeClass="active" to="payment" smooth={true} duration={500}>
                Payment
              </Link>
            </Col>
          </Row>

          <Row lg={12} xs={12} style={{height:"80vh"}}>
            <Element id="title" >
               <h1> Alexander Guevara </h1> 
            </Element>
          </Row>

          <Row lg={12} style={{height:"80vh"}}>
            <Element id="body">
              <Col lg={2} xs={0}> </Col>
              <Col lg={8} xs={12}> 
                <p> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                 quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                 fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
                 culpa qui officia deserunt mollit anim id est laborum." </p> 
              </Col>
              <Col lg={2} xs={0}></Col>
            </Element>
          </Row>

          <Row lg={12} style={{height:"80vh"}}>
            <Element id="contact" >
              <Col lg={2} xs={0}> </Col>
              <Col lg={8} xs={12}> 
                <Box 
                  label="Name"
                  onChange={(event) => this.updateBox('name', event.target.value)} 
                  value={this.state.name} 
                />
                <Box 
                  label="Email"
                  onChange={(event) => this.updateBox('email', event.target.value)} 
                  value={this.state.email} 
                />
                <Box 
                  label="Message"
                  textarea={true}
                  onChange={(event) => this.updateBox('message', event.target.value)} 
                  value={this.state.message} />

                <Button formValues={this.state} email = "alexgue26@hotmail.com" 
                />
              </Col>
              <Col lg={2} xs={0}></Col>
            </Element>
          </Row>

          <Row lg={12} style={{height:"80vh"}}>
            <Element id="payment">
              <Col lg={2} xs={0}> </Col>
              <Col lg={8} xs={12}> 
                {/* Stripe KEY is a test key given in stripe website.*/}
                <StripeCheckout
                  token={this.onToken}
                  stripeKey="pk_test_TYooMQauvdEDq54NiTphI7jx"
                />
              </Col>
              <Col lg={2} xs={0}></Col>
            </Element>
          </Row>
        </Row>
      </Grid>
    );
  }
}

export default App;
