import React from 'react';
import QRScanner from '../components/QRScanner';

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Welcome to the Feedback App</h1>
      <p className="mb-6">Scan the QR code or access the web app to submit your feedback.</p>
      <QRScanner />
    </div>
  );
};

export default HomePage;
