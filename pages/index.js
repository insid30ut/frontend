import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Home = () => (
  <div className="container mx-auto px-4">
    <Head>
      <title>Mycelial Funguy - Mushroom Cultivation & Exploration</title>
      <meta name="description" content="Explore the fascinating world of mushroom cultivation with Mycelial Funguy. Find personal stories, proven techniques, and a growing community." />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    {/* Hero Section */}
    <section className="text-center py-20">
      <h1 className="text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 mb-4">
        Mycelial Funguy
      </h1>
      <div className="relative inline-block">
        <Image
          src="/hero-mushroom-psychedelic.jpg"
          alt="Psychedelic mushrooms"
          width={600}
          height={400}
          className="rounded-2xl shadow-2xl"
        />
      </div>
      <p className="max-w-2xl mx-auto mt-6 text-lg text-gray-700">
        Welcome to my personal journey through the fascinating world of mushroom cultivation. Here I share my hands-on experiences, discoveries, and favorite products that have transformed my growing practice. Whether you're a curious beginner or seasoned cultivator, join me in exploring the magical realm of fungi.
      </p>
      <div className="mt-8 flex justify-center gap-4">
        <Button asChild size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg">
          <Link href="/blog">Explore the Blog →</Link>
        </Button>
        <Button asChild size="lg" variant="outline" className="bg-white/50 backdrop-blur-sm">
          <Link href="/teks">Learn Techniques ☼</Link>
        </Button>
      </div>
    </section>

    {/* Features Section */}
    <section className="py-20">
      <div className="grid md:grid-cols-3 gap-8">
        <Card className="bg-white/30 backdrop-blur-sm border-0 shadow-lg">
          <CardHeader>
            <CardTitle>Personal Stories</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Read about my cultivation adventures, successes, failures, and everything I've learned along the way.</p>
          </CardContent>
        </Card>
        <Card className="bg-white/30 backdrop-blur-sm border-0 shadow-lg">
          <CardHeader>
            <CardTitle>Proven Techniques</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Step-by-step tutorials and techniques that I've tested and refined in my own growing practice.</p>
          </CardContent>
        </Card>
        <Card className="bg-white/30 backdrop-blur-sm border-0 shadow-lg">
          <CardHeader>
            <CardTitle>Growing Community</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Connect with fellow cultivators and share your own experiences in this wonderful journey.</p>
          </CardContent>
        </Card>
      </div>
    </section>
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