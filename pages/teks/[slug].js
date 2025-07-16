import Head from 'next/head';
import { useRouter } from 'next/router';

const TekPost = ({ tek }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <Head>
        <title>{tek.title} - Mycelial Funguy</title>
        <meta name="description" content={tek.excerpt} />
      </Head>

      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl font-black text-center mb-8">{tek.title}</h1>
        <div
          className="prose lg:prose-xl max-w-none bg-white/30 backdrop-blur-sm p-8 rounded-lg shadow-lg"
          dangerouslySetInnerHTML={{ __html: tek.content }}
        />
      </div>
    </div>
  );
};

export async function getStaticPaths() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/teks`);
  const teks = await res.json();

  const paths = teks.map((tek) => ({
    params: { slug: tek.slug },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/teks/${params.slug}`);
  const tek = await res.json();

  return {
    props: {
      tek,
    },
    revalidate: 1,
  };
}

export default TekPost;