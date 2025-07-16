import Head from 'next/head';

const BlogPost = ({ post }) => {
  return (
    <div>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.content.substring(0, 150)} />
      </Head>

      <article>
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <div className="prose lg:prose-xl max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
      </article>
    </div>
  );
};

export async function getStaticPaths() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blog`);
  const posts = await res.json();

  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blog/${params.slug}`);
  const post = await res.json();

  return {
    props: {
      post,
    },
    revalidate: 1,
  };
}

export default BlogPost;