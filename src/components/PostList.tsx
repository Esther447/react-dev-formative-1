import type { Post } from "../types/Post";
import PostComponent from "./Post";

const now = new Date();

const posts: Post[] = [
  {
    id: 1,
    title: "Getting Started with React",
    author: "Esther",
    content:
      "React is a JavaScript library for building user interfaces with reusable components.",
    date: now.toISOString(),
  },
  {
    id: 2,
    title: "Why TypeScript Is Useful",
    author: "Alice",
    content:
      "TypeScript helps developers catch errors by adding types to JavaScript code.",
    date: new Date(now.getTime() - 23 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: 3,
    title: "Learning Vite",
    author: "John",
    content:
      "Vite provides a fast development environment for modern web applications.",
    date: "2025-06-01T10:00:00.000Z",
  },
];

function PostList() {
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