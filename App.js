import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { validateEmail } from './utils/formValidation'; // Importing helper function
import { CustomButton } from './components/CustomButton'; // Importing reusable component

// Main App Component
const App = () => {
  const handlePress = () => {
    const email = 'test@example.com';
    if (validateEmail(email)) {
      console.log('Valid Email:', email);
    } else {
      console.log('Invalid Email:', email);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to React Native Helper Kit</Text>
      <CustomButton onPress={handlePress} title="Validate Email" />
    </View>
  );
};

// Styling for the app
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default App;
