import type { Post } from "../types/Post";
import PostComponent from "./Post";

function PostList() {
  const posts: Post[] = [
    {
      id: 1,
      title: "Getting Started with React",
      author: "Esther",
      content:
        "React is a JavaScript library for building user interfaces with reusable components.",
      date: "September 19, 2026",
    },
    {
      id: 2,
      title: "Why TypeScript Is Useful",
      author: "Alice",
      content:
        "TypeScript helps developers catch errors by adding types to JavaScript code.",
      date: "September 18, 2026",
    },
    {
      id: 3,
      title: "Learning Vite",
      author: "John",
      content:
        "Vite provides a fast development environment for modern web applications.",
      date: "September 17, 2026",
    },
  ];

  return (
    <section>
      <h2>Latest Posts</h2>

      {posts.map((post) => (
        <PostComponent key={post.id} post={post} />
      ))}
    </section>
  );
}

export default PostList;
