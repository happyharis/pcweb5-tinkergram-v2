import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./views/LoginPage";
import PostPageHome from "./views/PostPageHome";
import PostPageDetails from "./views/PostPageDetails";
import SignUpPage from "./views/SignUpPage";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<PostPageHome />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/post/:id" element={<PostPageDetails />} />
      </Routes>
    </>
  );
}
