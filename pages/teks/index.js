import Head from 'next/head';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Teks = ({ teks }) => (
  <div className="container mx-auto px-4 py-16">
    <Head>
      <title>Teks & Tips - Mycelial Funguy</title>
      <meta name="description" content="Find teks and tips from Mycelial Funguy" />
    </Head>

    <div className="max-w-3xl mx-auto">
      <h1 className="text-5xl font-black text-center mb-8">Teks & Tips</h1>
      <div className="grid md:grid-cols-2 gap-8">
        {teks.map((tek) => (
          <Link href={`/teks/${tek.slug}`} key={tek._id}>
            <Card className="bg-white/30 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle>{tek.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{tek.excerpt}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  </div>
);

export async function getStaticProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/teks`);
  const teks = await res.json();

  return {
    props: {
      teks,
    },
    revalidate: 1,
  };
}

export default Teks;