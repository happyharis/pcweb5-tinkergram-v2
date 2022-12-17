import { doc, setDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../firebase";

export default function PostPageAdd() {
  const [user, loading, error] = useAuthState(auth);
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate();

  async function addPost() {
    await setDoc(doc(db, "posts"), { caption, image });
  }

  useEffect(() => {
    if (!user) return navigate("/login");
  }, [navigate, user]);

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
        <h1 style={{ marginBlock: "1rem" }}>Add Post</h1>
        <Form>
          <Form.Group className="mb-3" controlId="caption">
            <Form.Label>Caption</Form.Label>
            <Form.Control
              type="text"
              placeholder="Lovely day"
              value={caption}
              onChange={(text) => setCaption(text.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="image">
            <Form.Label>Image URL</Form.Label>
            <Form.Control
              type="text"
              placeholder="https://zca.sg/img/1"
              value={image}
              onChange={(text) => setImage(text.target.value)}
            />
            <Form.Text className="text-muted">
              Make sure the url has a image type at the end: jpg, jpeg, png.
            </Form.Text>
          </Form.Group>
          <Button variant="primary" onClick={async (e) => addPost()}>
            Submit
          </Button>
        </Form>
      </Container>
    </>
  );
}
