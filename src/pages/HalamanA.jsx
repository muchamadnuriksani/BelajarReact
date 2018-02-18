import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Container, Row, Col } from 'reactstrap';

import JumbotronKu from '../components/JumbotronKu';
export default class HalamanA extends Component{
  render(){
    return(
      // {/* <NavbarKu/> */}
      // {/* <CarouselKu/> */}
      // // <JumbotronKu/>
      // {/* <h1>Halaman A</h1>

      // <Button
      // onClick={this.props.keA}>
      // ke Halaman A
      // </Button> {' '}
      
      // <Button
      // onClick={this.props.keB}>
      // ke Halaman B
      // </Button> {' '}
      
      // <Button
      // onClick={this.props.keC}>
      // ke Halaman C
      // </Button> {' '} */}
      // <div>
      <div>
      <JumbotronKu/>
      <Container>
      <Row>
      <Col>
      <Card>
        <CardImg top width="100%" src="http://www.opusnusantara.com/images/Poster_BOPC_2017.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardText>Pelatihan 4 Hari Intensif</CardText>
          <CardText>
          <small className="text-muted">by Santren Koding</small>
          </CardText>
        </CardBody>
      </Card>
      </Col>
      <Col>
      <Card>
        <CardImg top width="100%" src="http://www.opusnusantara.com/images/Poster_KPP_2018.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardText>Pelatihan 4 Hari Intensif</CardText>
          <CardText>
          <small className="text-muted">by Santren Koding</small>
          </CardText>
        </CardBody>
      </Card>
      </Col>
      <Col>
      <Card>
        <CardImg top width="100%" src="http://www.opusnusantara.com/images/Poster_BIOPC_2017.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardText>Pelatihan 4 Hari Intensif</CardText>
          <CardText>
          <small className="text-muted">by Santren Koding</small>
          </CardText>
        </CardBody>
      </Card>
      </Col>
      </Row>
      </Container>
    </div>
    )
  }
}