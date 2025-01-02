import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Layout.scss';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <main className="body">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
