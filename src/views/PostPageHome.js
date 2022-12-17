import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { Container, Image, Nav, Navbar, Row } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";

export default function PostPageHome() {
  const [user, loading, error] = useAuthState(auth);
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  async function getAllPosts() {}

  async function checkUserLoggedIn() {}

  useEffect(() => {
    if (!user) return navigate("/login");
    getAllPosts();
  }, [navigate, user]);

  const ImagesRow = () => {
    return posts.map((post, index) => <ImageSquare key={index} post={post} />);
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
