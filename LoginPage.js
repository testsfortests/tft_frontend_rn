import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const LoginPage = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    useEffect(() => {
      checkIfLoggedIn();
    }, []);
  
    const checkIfLoggedIn = async () => {
      try {
        // const userToken = await AsyncStorage.getItem('userToken');
        const userToken = localStorage.getItem('userToken');

        if (userToken) {
          console.log('User is already logged in. Navigating to Home page.');
          navigation.navigate('Home');
        } else {
          console.log('User is not logged in.');
        }
      } catch (error) {
        console.error('Error checking if logged in:', error);
      }
    };
  
    const handleLogin = async () => {
      if (username === 'pawan' && password === 'kumar') {
        try {
        //   await AsyncStorage.setItem('userToken', 'exampleUserToken');
          localStorage.setItem('userToken', 'exampleUserToken');

          console.log('User logged in successfully. Navigating to Home page.');
          navigation.navigate('Home');
        } catch (error) {
          console.error('Error storing user token:', error);
        }
      } else {
        alert('Invalid username or password');
      }
    };
  
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          onChangeText={setUsername}
          value={username}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          onChangeText={setPassword}
          value={password}
          secureTextEntry
        />
        <Button title="Login" onPress={handleLogin} />
      </View>
    );
  };
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    width: '100%',
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
});

export default LoginPage;
