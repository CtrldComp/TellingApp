import React from 'react';
import Layout from '../layouts/layout';
import '../styles/globals.css';

interface MyAppProps {
  Component: React.ElementType;
  pageProps: Record<string, unknown>;
}

const MyApp = ({ Component, pageProps }: MyAppProps) => {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default MyApp;
