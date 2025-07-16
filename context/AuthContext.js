import { createContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const router = useRouter();

  const login = async ({ email, password }) => {
    // This is a placeholder for the actual API call
    console.log('Logging in with:', { email, password });
    setUser({ email }); // Mock user object
    router.push('/admin');
  };

  const logout = () => {
    setUser(null);
    router.push('/login');
  };

  return (
    <AuthContext.Provider value={{ user, error, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;