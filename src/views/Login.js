import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import { onLoginSuccessAction } from '../store/actions/userAction';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginForm: {}
    }
  }

  navigateToDashboard = () => {
    const { history, onLoginSuccessAction } = this.props;
    const { loginForm } = this.state;
    const { username, password } = loginForm;
    if(username && password){
        if(username === "hruday@gmail.com") {
            if(password === "hruday123") {
                onLoginSuccessAction();
                history.push("/dashboard");
            }
        }
    }
  };

  onChangeInput = (e) => {
    const { loginForm } = this.state;
    this.setState({ loginForm: {...loginForm, [e.target.id] : e.target.value} });
  }

  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="6">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <Form>
                      <h1>Login</h1>
                      <p className="text-muted">Sign In to your account</p>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" name="username" id="username" placeholder="Username" onChange={val => this.onChangeInput(val)} />
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="password" name="password" id="password" placeholder="Password" onChange={val => this.onChangeInput(val)} />
                      </InputGroup>
                      <Row>
                        <Col xs="12" className="text-right">
                          <Button color="primary" className="px-4" onClick={this.navigateToDashboard}>Login</Button>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

function bindAction(dispatch) {
  return {
    onLoginSuccessAction: () => { return dispatch(onLoginSuccessAction()) }
  }

}

function mapStateToProps(state) {
  return {
    employeeList: state.userDetails ? state.userDetails.employeeList : null
  }
}

export default connect(mapStateToProps, bindAction)(Login);
