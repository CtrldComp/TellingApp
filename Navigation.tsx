import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import FeedbackPage from './frontend/src/pages/feedback';
import AnalyticsPage from './frontend/src/pages/analytics';
import BankingPage from './frontend/src/pages/banking';
import TransferPage from './frontend/src/pages/transfer';
import SettingsPage from './frontend/src/pages/settings';
import CardsPage from './frontend/src/pages/cards';

export default function Navigation() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/details" element={<DetailsScreen />} />
          <Route path="/feedback" element={<FeedbackPage />} />
          <Route path="/analytics" element={<AnalyticsPage />} />
          <Route path="/banking" element={<BankingPage />} />
          <Route path="/transfer" element={<TransferPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/cards" element={<CardsPage />} />
        </Routes>
      </div>
    </Router>
  );
}
