import { Container, Nav, Navbar } from "react-bootstrap";
import { useEffect, useState } from "react";
import { API, POSTS } from "./constants";
import axios from "axios";

function App() {
  const [posts, setPosts] = useState([]);

  async function getAllPosts() {
    try {
      const response = await axios.get(API + POSTS);
      const posts = response.data;
      console.log(posts);
      setPosts(posts);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getAllPosts();
  }, []);

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
