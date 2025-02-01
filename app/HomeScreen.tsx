import React from 'react';
import { useNavigate } from 'expo-router';
import { Button } from '../components/ui/button';

export default function HomeScreen() {
  const navigate = useNavigate();

  const navigationButtons = [
    { title: 'Submit Feedback', route: '/feedback' },
    { title: 'View Analytics', route: '/analytics' },
    { title: 'Banking', route: '/banking' },
    { title: 'Transfer Money', route: '/transfer' },
    { title: 'Cards', route: '/cards' },
    { title: 'Settings', route: '/settings' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl font-bold mb-2 text-gray-800">
          Welcome to the App
        </h1>
        <p className="text-gray-600 mb-8">
          What would you like to do?
        </p>
        
        <div className="space-y-4 max-w-md mx-auto">
          {navigationButtons.map((button) => (
            <Button
              key={button.route}
              onClick={() => navigate(button.route)}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white"
            >
              {button.title}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
