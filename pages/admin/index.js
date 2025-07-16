import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../../context/AuthContext';
import BlogManagement from '../../components/admin/BlogManagement';
import TeksManagement from '../../components/admin/TeksManagement';

const AdminDashboard = () => {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    // If loading is finished and there's no user, redirect
    if (!loading && !user) {
      router.push('/');
    }
  }, [user, loading, router]);

  // While loading, or if no user, show a loading/access denied message
  if (loading || !user) {
    return <p className="text-center mt-12">Loading or Access Denied...</p>;
  }

  // If the user is authenticated, show the dashboard
  // The <Layout> wrapper is now removed from here.
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-white">Admin Dashboard</h1>
      <div className="p-6 mb-8 bg-gray-800 border border-gray-700 rounded-lg">
        <BlogManagement />
      </div>
      <div className="p-6 bg-gray-800 border border-gray-700 rounded-lg">
        <TeksManagement />
      </div>
    </div>
  );
};

export default AdminDashboard;