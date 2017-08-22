import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Button, Container, Form, FormGroup, Label, Input, Row, Col, Modal, ModalHeader, ModalBody, ModalFooter, Media } from 'reactstrap';

import Header from './components/Header.js';
import './Home.less';

export default class NotFound extends Component {

  state = {
    modal: false,
    contactInfo: {}
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  submitContactInfo = () => {
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;

    this.toggle();
    this.setState({
      contactInfo: {
        name,
        address,
        phone,
        email
      }
    });
  }

  checkSubmit = () => {
    alert('送出成功');
    this.toggle();
  }

  render() {
    return (
      <div id="pageHome">
        <Header />
        <Container>
          <Row>
            <Col>
              <Breadcrumb>
                <BreadcrumbItem><a href="/#/">首頁</a></BreadcrumbItem>
                <BreadcrumbItem active>聯絡我們</BreadcrumbItem>
              </Breadcrumb>
              <Form>
                <FormGroup>
                  <Label for="examplePassword">姓名</Label>
                  <Input type="text" name="name" id="name" placeholder="name" />
                </FormGroup>
                <FormGroup>
                  <Label for="examplePassword">地址</Label>
                  <Input type="text" name="address" id="address" placeholder="address" />
                </FormGroup>
                <FormGroup>
                  <Label for="examplePassword">電話</Label>
                  <Input type="text" name="phone" id="phone" placeholder="phone" />
                </FormGroup>
                <FormGroup>
                  <Label for="exampleEmail">Email</Label>
                  <Input type="email" name="email" id="email" placeholder="E-Mail" />
                </FormGroup>
                <Button color="primary" onClick={this.submitContactInfo}>送出</Button>
              </Form>
              <Modal isOpen={this.state.modal} toggle={this.toggle}>
                <ModalHeader>送出資訊</ModalHeader>
                <ModalBody>
                  <p>姓名： {this.state.contactInfo.name}</p>
                  <p>地址： {this.state.contactInfo.address}</p>
                  <p>電話： {this.state.contactInfo.phone}</p>
                  <p>Email： {this.state.contactInfo.email}</p>
                </ModalBody>
                <ModalFooter>
                  <Button color="primary" onClick={this.checkSubmit}>確認</Button>{' '}
                  <Button color="secondary" onClick={this.toggle}>取消</Button>
                </ModalFooter>
              </Modal>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
