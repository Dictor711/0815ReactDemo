import React, { Component } from 'react';
import { Jumbotron, Breadcrumb, BreadcrumbItem, Button, Container, Row, Col, TabContent, TabPane, Nav, NavItem, NavLink, Card, CardTitle, CardText } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import classnames from 'classnames';

import Header from './components/Header.js';
// import Content from './components/Content.js';
import './Home.less';

const member = [
  {
    name: 'Joe',
    desc: '平日無所事事'
  },
  {
    name: 'Delete',
    desc: '喜歡刪除別人檔案'
  },
  {
    name: '鄧麗君',
    desc: '不知道為了什麼'
  },
  {
    name: 'Bruce Lee',
    desc: '啊啊啊～'
  }
];

export default class Home extends Component {
  state = {
    activeTab: '1'
  }

  toggle = (tab) => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  render() {
    return (
      <div id="pageHome">
        <Header />
        <Container>
          <Breadcrumb>
            <BreadcrumbItem><a href="/#/">首頁</a></BreadcrumbItem>
            <BreadcrumbItem active>關於我們</BreadcrumbItem>
          </Breadcrumb>
          <Row>
            <Col>
              <Nav tabs>
                <NavItem>
                  <NavLink
                    className={classnames({ active: this.state.activeTab === '1' })}
                    onClick={() => { this.toggle('1'); }}
                  >
                    公司歷史
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({ active: this.state.activeTab === '2' })}
                    onClick={() => { this.toggle('2'); }}
                  >
                    團隊成員
                  </NavLink>
                </NavItem>
              </Nav>
              <TabContent activeTab={this.state.activeTab}>
                <TabPane tabId="1">
                  <Row>
                    <Col sm="12">
                      <Jumbotron>
                        <h1 className="display-3">塑化劑公司</h1>
                        <p className="lead">居家必備、殺人滅口的必備良藥</p>
                        <hr className="my-2" />
                        <p>為了提供國人更好的殺人管道，不惜每年花費破億研發費用，期待國人使用都有更佳的藥效發揮~</p>
                        <p className="lead">
                          <Button color="primary">知道的太多了</Button>
                        </p>
                      </Jumbotron>
                    </Col>
                  </Row>
                </TabPane>
                <TabPane tabId="2">
                  <Row>
                    {
                      member.map(item => (
                        <Col sm="6">
                          <Card block>
                            <CardTitle>{item.name}</CardTitle>
                            <CardText>{item.desc}</CardText>
                            <Button>前往個人頁面</Button>
                          </Card>
                        </Col>
                      ))
                    }
                  </Row>
                </TabPane>
              </TabContent>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
