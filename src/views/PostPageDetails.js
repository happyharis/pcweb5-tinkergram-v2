import React from "react";
import { Card, Col, Container, Image, Nav, Navbar, Row } from "react-bootstrap";

export default function PostPageDetails() {
  const { image, caption } = {
    image: "https://zca.sg/img/1",
    caption: "Soccer player",
  };
  return (
    <>
      <Navbar variant="light" bg="light">
        <Container>
          <Navbar.Brand href="/">Tinkergram</Navbar.Brand>
          <Nav>
            <Nav.Link href="/add">New Post</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Container>
        <Row style={{ marginTop: "2rem" }}>
          <Col md="6">
            <Image src={image} style={{ width: "100%" }} />
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <Card.Text>{caption}</Card.Text>
                <Card.Link>Edit</Card.Link>
                <Card.Link>Delete</Card.Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
