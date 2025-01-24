import React from 'react';
import { Button, StyleSheet, View } from 'react-native';

// Custom Button Component
export const CustomButton = ({ onPress, title }) => {
  return (
    <View style={styles.buttonContainer}>
      <Button title={title} onPress={onPress} color="#1E90FF" />
    </View>
  );
};

// Styling for the button
const styles = StyleSheet.create({
  buttonContainer: {
    margin: 10,
  },
});
