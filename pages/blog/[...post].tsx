import { useRouter } from 'next/router';
// import Header from '../../components/header';

const Post = () => {
  const router = useRouter();
  const post = router.query.post === undefined ? [] : router.query.post;

  console.log('router.query.post::: ', Array.isArray(router.query.post));

  return (
    <>
      {/* <Header /> */}
      <h1>Post: {Array.isArray(post) ? post.join('/') : post}</h1>
    </>
  );
};

export default Post;
