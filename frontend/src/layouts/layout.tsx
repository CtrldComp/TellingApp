import React from 'react';
import Header from '../components/layout/Header';
import BottomNavigation from '../components/layout/BottomNavigation';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex-grow">{children}</main>
      <BottomNavigation />
    </div>
  );
};

export default Layout;
