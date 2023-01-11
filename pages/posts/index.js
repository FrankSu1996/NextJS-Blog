import AllPosts from "../../components/posts/AllPosts";
import { getAllPosts } from "../../lib/posts-util";

const AllPostsPage = (props) => {
  return <AllPosts posts={props.posts} />;
};

export default AllPostsPage;

export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
}
