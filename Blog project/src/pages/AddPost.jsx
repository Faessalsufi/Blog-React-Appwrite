import React from "react";
import { PostForm, Container } from "../components";
function addPost() {
  return (
    <div className="py-9">
      <Container>
        <PostForm />
      </Container>
    </div>
  );
}

export default addPost;
