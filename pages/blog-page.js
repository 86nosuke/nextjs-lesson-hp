import Layout from "../components/Layout";
import Post from "../components/Post";
import { getAllpostsData } from "../lib/posts";
const Blog = ({ posts }) => {
  return (
    <Layout title="Blog">
      <ul className="m-10">
        {posts && posts.map((post) => <Post key={post.id} post={post} />)}
      </ul>
    </Layout>
  );
};

export default Blog;

//ビルド時にサーバーサイドで一回だけ実行される
export async function getStaticProps() {
  const posts = await getAllpostsData();
  return {
    props: { posts },
  };
}
