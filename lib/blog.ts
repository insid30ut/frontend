import matter from 'gray-matter';

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  featured_image: string;
  author: string;
  tags: string[];
  content: string;
}

// Mock blog posts data (in a real app, this would read from the content/blog directory)
const blogPostsData: Record<string, BlogPost> = {
  'my-first-mushroom-harvest': {
    slug: 'my-first-mushroom-harvest',
    title: "My First Mushroom Harvest: A Journey into Oyster Mushroom Cultivation",
    date: "2024-06-15",
    excerpt: "After months of preparation and anticipation, I finally harvested my first batch of oyster mushrooms. Here's what I learned from this magical experience.",
    featured_image: "/images/blog/mushroom-cultivation-setup.jpg",
    author: "FunGuy",
    tags: ["oyster mushrooms", "beginner", "harvest", "cultivation"],
    content: `# My First Mushroom Harvest: A Journey into Oyster Mushroom Cultivation

There's something truly magical about watching mushrooms emerge from what seems like nothing more than coffee grounds and straw. After weeks of careful tending, monitoring humidity, and anxiously checking my fruiting chamber every morning, the moment finally arrived – my first mushroom harvest!

## The Setup

I started with a simple oyster mushroom kit, but quickly graduated to creating my own substrate using spent coffee grounds from local cafés. The process was both art and science, requiring precision in sterilization while maintaining the organic, intuitive connection to the growing process.

## The Breakthrough Moment

Day 14 was when everything changed. Tiny pinheads began forming along the substrate surface, like miniature alien cities emerging from another world. The excitement was overwhelming – I found myself checking the chamber every few hours, watching as these tiny pins developed into recognizable mushroom shapes.

## Lessons Learned

**Temperature Control is Everything**: I learned the hard way that even small temperature fluctuations can dramatically impact development. My homemade fruiting chamber needed constant adjustments.

**Patience Pays Off**: The urge to harvest early was strong, but waiting for full maturation resulted in much better flavor and texture.

**Contamination Awareness**: Spotting early signs of mold and bacterial contamination became second nature, though I did lose one batch to trichoderma (green mold).

## The Harvest

When harvest day finally arrived, I used a sharp knife to cut the clusters at the base, leaving the substrate intact for potential second flushes. The mushrooms were beautiful – pearly white caps with a subtle earthy aroma that filled the entire room.

## What's Next?

This success has sparked an obsession! I'm already experimenting with shiitake cultivation and planning to try lion's mane next. The world of mycology is vast and endlessly fascinating.

*Have you tried growing oyster mushrooms? Share your experiences in the comments – I'd love to hear about your successes and challenges!*`
  },
  'coffee-grounds-substrate-experiment': {
    slug: 'coffee-grounds-substrate-experiment',
    title: "The Coffee Grounds Experiment: Turning Waste into Mushroom Magic",
    date: "2024-06-10",
    excerpt: "Discovering how spent coffee grounds can become the perfect growing medium for oyster mushrooms, plus tips for sourcing and preparing this free substrate.",
    featured_image: "/images/blog/mycelium-jar.png",
    author: "FunGuy",
    tags: ["substrate", "coffee grounds", "sustainability", "oyster mushrooms"],
    content: `# The Coffee Grounds Experiment: Turning Waste into Mushroom Magic

One person's waste is a mushroom cultivator's treasure! After months of purchasing expensive growing substrates, I discovered the incredible potential of spent coffee grounds – and the results have been absolutely mind-blowing.

## Why Coffee Grounds Work

Coffee grounds provide an excellent nitrogen source and have the perfect texture for mushroom cultivation. The brewing process also provides a level of pasteurization, reducing the initial microbial load. Plus, they're free and abundant!

## Sourcing Your Grounds

Local coffee shops are goldmines for substrate material. I've built relationships with three cafés in my area who save their grounds for me. The key is consistency – visit the same shops regularly and always bring clean containers.

**Pro tip**: Avoid flavored coffee grounds as the artificial additives can inhibit mushroom growth.

## My Results

After six weeks of experimentation, my coffee ground substrates consistently outperformed commercial mixes:

- **30% faster colonization** compared to straw-based substrates
- **Higher yield per pound** of substrate material
- **Better mushroom texture** and flavor profile
- **Zero contamination** in properly prepared batches

## The Sustainability Factor

Using coffee grounds aligns perfectly with the sustainable ethos of mushroom cultivation. We're taking waste that would otherwise go to landfills and transforming it into nutritious food. It's a beautiful example of circular agriculture.

*What waste materials have you experimented with in your mushroom cultivation? Share your sustainable growing tips!*`
  },
  'shiitake-log-cultivation-adventure': {
    slug: 'shiitake-log-cultivation-adventure',
    title: "Shiitake Log Cultivation: A Long-Term Growing Adventure",
    date: "2024-05-28",
    excerpt: "Embarking on the traditional Japanese method of shiitake cultivation using hardwood logs. This multi-year project requires patience but offers incredible rewards.",
    featured_image: "/images/blog/shiitake-logs.jpg",
    author: "FunGuy",
    tags: ["shiitake", "log cultivation", "traditional methods", "long-term"],
    content: `# Shiitake Log Cultivation: A Long-Term Growing Adventure

When I decided to try traditional shiitake log cultivation, I knew I was committing to a multi-year journey. Unlike the quick gratification of oyster mushroom kits, log cultivation teaches patience, observation, and the deeper rhythms of fungal biology.

## Choosing the Right Wood

Log selection is crucial for success. I sourced fresh-cut oak logs from a local arborist – the logs need to be cut within 2-4 weeks to maintain proper moisture while avoiding contamination from competing fungi.

## The Waiting Game

This is where shiitake cultivation differs dramatically from other mushroom growing. After inoculation, the logs need 6-18 months for the mycelium to fully colonize the wood. During this time, I've learned to read subtle signs of colonization.

## The Philosophy of Log Cultivation

This slow process has taught me patience and respect for fungal timelines. In our instant-gratification world, shiitake logs operate on their own schedule. They're teaching me to think in seasons and years rather than days and weeks.

*Are you considering log cultivation? What draws you to traditional growing methods versus modern techniques?*`
  }
};

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  return Object.values(blogPostsData).sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  return blogPostsData[slug] || null;
}

export async function getAllBlogSlugs(): Promise<string[]> {
  return Object.keys(blogPostsData);
}
