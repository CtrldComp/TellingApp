import React from 'react';
import { Stack } from 'expo-router';

export default function ScreenLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4f4f4',
        },
        headerTintColor: '#333',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen 
        name="index" 
        options={{ 
          title: 'Home',
        }} 
      />
      <Stack.Screen 
        name="feedback" 
        options={{ 
          title: 'Submit Feedback',
        }} 
      />
    </Stack>
  );
}
