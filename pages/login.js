import { useState, useContext } from 'react';
import Layout from '../components/Layout';
import AuthContext from '../context/AuthContext';

const Login = () => {
  const { login } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    login({ email, password });
  };

  return (
    <Layout>
      <h1>Login</h1>
      <form onSubmit={onSubmit}>
        <div>
          <label>Email Address</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={onChange}
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={onChange}
            minLength="6"
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </Layout>
  );
};

export default Login;