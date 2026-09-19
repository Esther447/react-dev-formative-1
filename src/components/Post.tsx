import type { Post as PostType } from "../types/Post";

interface PostProps {
  post: PostType;
}

function Post({ post }: PostProps) {
  const isFeaturedAuthor = post.author === "Esther";

  return (
    <article className={isFeaturedAuthor ? "featured-post" : ""}>
      <h2>{post.title}</h2>

      <p className="post-author">By {post.author}</p>

      <p>{post.content}</p>

      <p className="post-date">{post.date}</p>
    </article>
  );
}

export default Post;