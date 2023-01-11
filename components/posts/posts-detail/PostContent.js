import classes from "./PostContent.module.css";
import PostHeader from "./PostHeader";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

const PostContent = (props) => {
  const { post } = props;
  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      {/* eslint-disable-next-line react/no-children-prop */}
      <ReactMarkdown children={post.content}></ReactMarkdown>
    </article>
  );
};

export default PostContent;
