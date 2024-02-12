import React, { useState, useEffect } from "react";
import service from "../appwrite/config";
import { PostCard, Container } from "../components";
function AllPosts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    service.getPosts([]).then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  return (
    <div className="w-full py-9">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div key={post.$id}>
              <Post post={post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default AllPosts;
