import AllPosts from "../../components/posts/AllPosts";
import { getAllPosts } from "../../lib/posts-util";
import Head from "next/head";

const AllPostsPage = (props) => {
  return (
    <>
      <Head>
        <title>All My Posts</title>
        <meta name="description" content="A list of programming posts." />
      </Head>
      <AllPosts posts={props.posts} />
    </>
  );
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
