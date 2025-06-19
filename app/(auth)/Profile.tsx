// app/profile.tsx
import { router } from 'expo-router';
import { signOut } from 'firebase/auth';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { auth } from '../../firebaseConfig'; // Adjust path based on your project

export default function Profile() {
  const user = auth.currentUser;


  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.replace('../../(auth)/LoginScreen'); // Redirect to login page after logout
    } catch (error) {
      console.error('Logout Error:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <Text style={styles.info}>Email: {user?.email}</Text>
      <Pressable
        style={styles.button}
        onPress={() => handleLogout()}
      >
        <Text style={styles.buttonText}>Logout</Text>
      </Pressable>    
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',

  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  info: {
    fontSize: 18,
    marginBottom: 12,
  },
  button: {
    backgroundColor: '#6C63FF',
    borderRadius: 20,
    paddingVertical: 14,
    paddingHorizontal: 40,
    marginTop: 20,
    width: '80%',
  },
  buttonText: {
    textAlign: "center",
    fontSize: 20,
    color: "#ffffff",
    backgroundColor: "#6C63FF",
    padding: 10,
    borderRadius: 20,
    fontWeight: "bold",
  },
});
