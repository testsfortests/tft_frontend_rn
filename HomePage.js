import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';
import Toast from 'react-native-toast-message';

const HomePage = () => {
  const handleButtonPress = async () => {
    try {
      // Make an Axios GET request to your endpoint
    //   const response = await axios.post('https://tft-backend.vercel.app/api/send-message');
    console.log(response.data)
      // Display a toast message with the response data
      Toast.show({
        type: 'success',
        text1: 'Success',
        text2: response.data.message, // Assuming your API returns a message field
      });
    } catch (error) {
      // Handle errors
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: error.message, // Display error message
      });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Tests For Tests</Text>
      </View>
      <View style={styles.content}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: 'red' }]} // Example color
          onPress={handleButtonPress}
        >
          <Text style={styles.buttonText}>Send Message</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: 'blue' }]} // Example color
          onPress={handleButtonPress}
        >
          <Text style={styles.buttonText}>Send Poll</Text>
        </TouchableOpacity>
        {/* Add more buttons as needed */}
      </View>
      <View style={styles.footer}>
        <Text>All rights reserved. © [2024] [Tests For Tests]
</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  header: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 200,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  footer: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    alignItems: 'center',
  },
});

export default HomePage;
