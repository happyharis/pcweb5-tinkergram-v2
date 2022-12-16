import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

export default function PostPageAdd() {
  return (
    <Navbar variant="light" bg="light">
      <Container>
        <Navbar.Brand href="/">Tinkergram</Navbar.Brand>
        <Nav>
          <Nav.Link href="/add">New Post</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
