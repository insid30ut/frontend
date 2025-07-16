import Head from 'next/head';
import { useRouter } from 'next/router';

const BlogPost = ({ post }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <Head>
        <title>{post.title} - Mycelial Funguy</title>
        <meta name="description" content={post.excerpt} />
      </Head>

      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl font-black text-center mb-8">{post.title}</h1>
        <div
          className="prose lg:prose-xl max-w-none bg-white/30 backdrop-blur-sm p-8 rounded-lg shadow-lg"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </div>
  );
};

export async function getStaticPaths() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blog`);
  const posts = await res.json();

  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: true };
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