import Head from 'next/head';

const TekPage = ({ tek }) => {
  return (
    <div>
      <Head>
        <title>{tek.title}</title>
        <meta name="description" content={tek.content.substring(0, 150)} />
      </Head>

      <article>
        <h1 className="text-4xl font-bold mb-4">{tek.title}</h1>
        <div className="prose lg:prose-xl max-w-none" dangerouslySetInnerHTML={{ __html: tek.content }} />
      </article>
    </div>
  );
};

export async function getStaticPaths() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/teks`);
  const teks = await res.json();

  const paths = teks.map((tek) => ({
    params: { slug: tek.slug },
  }));

  return { paths, fallback: false };
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

export default TekPage;