import type { NextPage } from 'next';
import Head from 'next/head';

import { Post } from '../Components/Post';

const Posts: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Posts</title>
      </Head>
      <Post id={2} />
    </div>
  );
};

export default Posts;
