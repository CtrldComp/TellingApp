import React from 'react';
import { Stack } from 'expo-router/stack';

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f5f5f5',
        },
        headerTintColor: '#333',
        contentStyle: {
          backgroundColor: '#f5f5f5',
        },
      }}
    />
  );
}
