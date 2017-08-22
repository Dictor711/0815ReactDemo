import React, { Component } from 'react';
import {
  Container, Row, Col, Jumbotron, Button, Card, CardImg, CardText, CardBlock,
  CardTitle, CardSubtitle, ListGroup, ListGroupItem, Badge
} from 'reactstrap';
import Data from './data.json';

export default class Content extends Component {
  state = {
    news: Data
  }

  getTagNews = (setTag) => {
    const filterNews = Data.filter(element => element.tag === setTag);
    console.log(1);
    this.setState({
      news: filterNews
    });
  }

  render() {
    return (
      <Container>
        <Row>
          <Col md="2">
            <ListGroup>
              <ListGroupItem disabled tag="a" href="#">全部</ListGroupItem>
              <ListGroupItem tag="a" href="#">國際</ListGroupItem>
              <ListGroupItem tag="a" href="#">社會</ListGroupItem>
              <ListGroupItem tag="a" href="#">娛樂</ListGroupItem>
              <ListGroupItem tag="a" href="#">科技</ListGroupItem>
            </ListGroup>
          </Col>
          <Col md="10">
            <Jumbotron>
              <h1 className="display-3">Hello, world!</h1>
              <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
              <hr className="my-2" />
              <p>It uses utility classes for typgraphy and spacing to space content out within the larger container.</p>
              <p className="lead">
                <Button color="primary">Learn More</Button>
              </p>
            </Jumbotron>
            <Row>
              {
                this.state.news.map(article => (
                  <Col md="4">
                    <Card>
                      <CardImg top width="100%" src={article.img} alt="Card image cap" />
                      <CardBlock>
                        <CardTitle>{article.title}</CardTitle>
                        <CardSubtitle>
                          <Badge color="success">{article.price}</Badge>{' '}
                          <Badge color="info">{article.tag}</Badge>
                        </CardSubtitle>
                        <CardText>{article.desc}</CardText>
                        <Button>Button</Button>
                      </CardBlock>
                    </Card>
                  </Col>
                ))
              }
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}
