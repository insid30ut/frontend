import Head from 'next/head';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Blog = ({ posts }) => (
  <div className="container mx-auto px-4 py-16">
    <Head>
      <title>Blog - Mycelial Funguy</title>
      <meta name="description" content="Read the latest blog posts from Mycelial Funguy" />
    </Head>

    <div className="max-w-3xl mx-auto">
      <h1 className="text-5xl font-black text-center mb-8">Blog</h1>
      <div className="grid md:grid-cols-2 gap-8">
        {posts.map((post) => (
          <Link href={`/blog/${post.slug}`} key={post._id}>
            <Card className="bg-white/30 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle>{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{post.excerpt}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  </div>
);

export async function getStaticProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blog`);
  const posts = await res.json();

  return {
    props: {
      posts,
    },
    revalidate: 1,
  };
}

export default Blog;