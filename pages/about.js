import Head from 'next/head';
import Layout from '../components/Layout';

const About = () => (
  <div className="container mx-auto px-4 py-16">
    <Head>
      <title>About - Mycelial Funguy</title>
      <meta name="description" content="Learn more about Mycelial Funguy" />
    </Head>

    <div className="max-w-3xl mx-auto">
      <h1 className="text-5xl font-black text-center mb-8">About Me</h1>
      <div className="prose lg:prose-xl max-w-none bg-white/30 backdrop-blur-sm p-8 rounded-lg shadow-lg">
        <p>
          I am a funguy who is passionate about the interconnectedness of all things.
          This website is a place for me to share my thoughts, ideas, and creations with the world.
        </p>
        <p>
          My journey into the world of mycology began years ago, and it has since become a central part of my life. I believe that fungi hold incredible potential, not just as a source of food and medicine, but also as a model for understanding complex systems and our place within them.
        </p>
        <p>
          Through this platform, I hope to inspire others to explore the magical realm of fungi, whether you're a curious beginner or a seasoned cultivator.
        </p>
      </div>
    </div>
  </div>
);

export default About;