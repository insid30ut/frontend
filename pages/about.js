import Head from 'next/head';

const About = () => (
  <div>
    <Head>
      <title>About - Mycelial Funguy</title>
      <meta name="description" content="Learn more about Mycelial Funguy" />
    </Head>

    <div>
      <h1 className="text-4xl font-bold mb-4">About Me</h1>
      <div className="prose lg:prose-xl max-w-none">
        <p>
          I am a funguy who is passionate about the interconnectedness of all things. 
          This website is a place for me to share my thoughts, ideas, and creations with the world.
        </p>
      </div>
    </div>
  </div>
);

export default About;