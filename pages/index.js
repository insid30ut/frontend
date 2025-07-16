import Head from 'next/head';
import Link from 'next/link';

const Home = ({ posts, teks }) => (
  <div>
    <Head>
      <title>Mycelial Funguy</title>
      <meta name="description" content="Welcome to the personal website of a mycelial funguy" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to Mycelial Funguy</h1>
      <p className="text-xl">Exploring the interconnectedness of all things.</p>
    </div>

    <div className="mt-8">
      <h2 className="text-3xl font-bold mb-4">Latest Blog Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post._id}>
            <Link href={`/blog/${post.slug}`}>
              <a className="text-xl font-bold">{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>

    <div className="mt-8">
      <h2 className="text-3xl font-bold mb-4">Latest Teks</h2>
      <ul>
        {teks.map((tek) => (
          <li key={tek._id}>
            <Link href={`/teks/${tek.slug}`}>
              <a className="text-xl font-bold">{tek.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export async function getStaticProps() {
  const resPosts = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blog`);
  const posts = await resPosts.json();

  const resTeks = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/teks`);
  const teks = await resTeks.json();

  return {
    props: {
      posts,
      teks,
    },
    revalidate: 1,
  };
}

export default Home;