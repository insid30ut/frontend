import { useContext } from 'react';
import Layout from '../../components/Layout';
import AuthContext from '../../context/AuthContext';
import BlogManagement from '../../components/admin/BlogManagement';
import TeksManagement from '../../components/admin/TeksManagement';
import styles from '../../styles/Admin.module.css';

const AdminDashboard = () => {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <p>Access Denied</p>;
  }

  return (
    <Layout>
      <div className={styles.container}>
        <h1>Admin Dashboard</h1>
        <div className={styles.managementSection}>
          <BlogManagement />
        </div>
        <div className={styles.managementSection}>
          <TeksManagement />
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;