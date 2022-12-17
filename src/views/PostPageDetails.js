import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Col, Container, Image, Nav, Navbar, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { API, POST } from "../constants";

export default function PostPageDetails() {
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState("");
  const params = useParams();
  const id = params.id;

  async function getPost(id) {
    const url = API + POST + `/${id}`;
    const response = await axios.get(url);
    const { caption, image } = response.data;
    setCaption(caption);
    setImage(image);
  }

  useEffect(() => {
    getPost(id);
  }, [id]);

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
                <Card.Link href={`/update/${id}`}>Edit</Card.Link>
                <Card.Link>Delete</Card.Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
