import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { Container, Image, Nav, Navbar, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { API, POSTS } from "./constants";

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

  const ImagesRow = () => {
    // posts = [{id: 3, caption: 'Ronaldo', image: 'https://zca.sg/img/1'}];
    return posts.map((post, index) => <ImageSquare key={index} post={post} />);
    // return [<ImageSquare key={index} post={post}]

    // return [<ImageSquare
    //          key={0}
    //          post={{id: 3, caption: 'Ronaldo', image: 'https://zca.sg/img/1'}}
    //        />]
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
        <Row>
          <ImagesRow />
        </Row>
      </Container>
    </>
  );
}

function ImageSquare({ post }) {
  const { image, id } = post;
  return (
    <Link
      to={`post/${id}`}
      style={{
        width: "18rem",
        marginLeft: "1rem",
        marginTop: "2rem",
      }}
    >
      <Image
        src={image}
        style={{
          objectFit: "cover",
          width: "18rem",
          height: "18rem",
        }}
      />
    </Link>
  );
}

export default App;
