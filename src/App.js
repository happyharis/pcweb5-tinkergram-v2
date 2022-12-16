import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Nav, Navbar } from "react-bootstrap";

import "./App.css";

function App() {
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

export default App;
