import { useState, useEffect } from 'react';

const TeksManagement = () => {
  const [teks, setTeks] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [slug, setSlug] = useState('');
  const [editingTek, setEditingTek] = useState(null);

  const fetchTeks = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/teks`);
      if (!res.ok) {
        throw new Error('Failed to fetch teks');
      }
      const data = await res.json();
      setTeks(data);
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    fetchTeks();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const tekData = { title, content, slug };

    try {
      const url = editingTek
        ? `${process.env.NEXT_PUBLIC_API_URL}/teks/${editingTek._id}`
        : `${process.env.NEXT_PUBLIC_API_URL}/teks`;
      const method = editingTek ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(tekData),
      });

      if (!res.ok) {
        throw new Error(`Failed to ${method === 'POST' ? 'create' : 'update'} tek`);
      }

      setTitle('');
      setContent('');
      setSlug('');
      setEditingTek(null);
      fetchTeks();
    } catch (error) {
      alert(error.message);
    }
  };

  const handleEdit = (tek) => {
    setTitle(tek.title);
    setContent(tek.content);
    setSlug(tek.slug);
    setEditingTek(tek);
  };

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/teks/${id}`, {
        method: 'DELETE',
      });
      if (!res.ok) {
        throw new Error('Failed to delete tek');
      }
      fetchTeks();
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      <h3>Teks Entries</h3>
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
        <button type="submit">{editingTek ? 'Update Tek' : 'Create Tek'}</button>
      </form>
      <ul>
        {teks.map((tek) => (
          <li key={tek._id}>
            {tek.title}
            <button onClick={() => handleEdit(tek)}>Edit</button>
            <button onClick={() => handleDelete(tek._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TeksManagement;