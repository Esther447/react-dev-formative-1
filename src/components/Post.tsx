import { memo } from "react";
import type { Post as PostType } from "../types/Post";

interface PostProps {
  post: PostType;
}

function isNew(dateStr: string): boolean {
  return Date.now() - new Date(dateStr).getTime() < 24 * 60 * 60 * 1000;
}

function Post({ post }: PostProps) {
  const isFeaturedAuthor = post.author === "Esther";
  const showNewBadge = isNew(post.date);
  const words = post.content.split(" ");
  const preview = words.slice(0, 10).join(" ") + (words.length > 10 ? "..." : "");

  return (
    <article className={isFeaturedAuthor ? "featured-post" : ""}>
      <div className="post-title-row">
        <h2>{post.title}</h2>
        {showNewBadge && <span className="new-badge">New!</span>}
      </div>

      <p className="post-author">By {post.author}</p>

      <p className="post-preview">{preview}</p>

      <p className="post-date">
        {new Date(post.date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>
    </article>
  );
}

export default memo(Post);