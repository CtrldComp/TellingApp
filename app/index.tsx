import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';

export default function Home() {
  const navigationButtons = [
    { title: 'Submit Feedback', href: '/feedback' },
    { title: 'View Analytics', href: '/analytics' },
    { title: 'Banking', href: '/banking' },
    { title: 'Transfer Money', href: '/transfer' },
    { title: 'Cards', href: '/cards' },
    { title: 'Settings', href: '/settings' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Welcome to the App</Text>
        <Text style={styles.subtitle}>What would you like to do?</Text>
        
        <View style={styles.buttonContainer}>
          {navigationButtons.map((button) => (
            <Link key={button.href} href={button.href} asChild>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>{button.title}</Text>
              </TouchableOpacity>
            </Link>
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    padding: 16,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 32,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 32,
  },
  buttonContainer: {
    width: '100%',
    maxWidth: 400,
    paddingHorizontal: 16,
  },
  button: {
    backgroundColor: '#3b82f6',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
