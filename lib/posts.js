import fetch from "node-fetch";
//エンドポイントを定義
const apiUrl = "https://jsonplaceholder.typicode.com/posts";
//async function 宣言は、 非同期関数
export async function getAllpostsData() {
  const res = await fetch(new URL(apiUrl));
  //jsonの形式に変換
  const posts = await res.json();
  return posts;
}
//idの一覧を取得
export async function getAllPostIds() {
  const res = await fetch(new URL(apiUrl));
  const posts = await res.json();

  return posts.map((post) => {
    return {
      params: {
        id: String(post.id),
      },
    };
  });
}
//idからデータfetchで取得
export async function getPostData(id) {
  const res = await fetch(new URL(`${apiUrl}/${id}/`));
  const post = await res.json();
  // return {
  //   post,
  // };
  return post;
}
