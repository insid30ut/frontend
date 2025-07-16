import { useState, useEffect } from 'react';

const BlogManagement = () => {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [slug, setSlug] = useState('');
  const [editingPost, setEditingPost] = useState(null);

  const fetchPosts = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blog`);
      if (!res.ok) {
        throw new Error('Failed to fetch posts');
      }
      const data = await res.json();
      setPosts(data);
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const postData = { title, content, slug };

    try {
      const url = editingPost
        ? `${process.env.NEXT_PUBLIC_API_URL}/blog/${editingPost._id}`
        : `${process.env.NEXT_PUBLIC_API_URL}/blog`;
      const method = editingPost ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(postData),
      });

      if (!res.ok) {
        throw new Error(`Failed to ${method === 'POST' ? 'create' : 'update'} post`);
      }

      setTitle('');
      setContent('');
      setSlug('');
      setEditingPost(null);
      fetchPosts();
    } catch (error) {
      alert(error.message);
    }
  };

  const handleEdit = (post) => {
    setTitle(post.title);
    setContent(post.content);
    setSlug(post.slug);
    setEditingPost(post);
  };

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blog/${id}`, {
        method: 'DELETE',
      });
      if (!res.ok) {
        throw new Error('Failed to delete post');
      }
      fetchPosts();
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      <h3>Blog Posts</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Slug"
          value={slug}
          onChange={(e) => setSlug(e.target.value)}
          required
        />
        <button type="submit">{editingPost ? 'Update Post' : 'Create Post'}</button>
      </form>
      <ul>
        {posts.map((post) => (
          <li key={post._id}>
            {post.title}
            <button onClick={() => handleEdit(post)}>Edit</button>
            <button onClick={() => handleDelete(post._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogManagement;