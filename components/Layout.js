import Header from './Header';

const Layout = ({ children }) => (
  <div className="min-h-screen bg-background">
    <Header />
    <main className="pt-24">
      {children}
    </main>
  </div>
);

export default Layout;