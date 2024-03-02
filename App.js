import React from 'react';
import { View, StyleSheet, Text,Platform } from 'react-native'; // Import Text
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginPage from './LoginPage';
import HomePage from './HomePage';
import Toast from 'react-native-toast-message'; // Import the toast component 

const Stack = createStackNavigator();

const App = () => {
  const checkIfLoggedIn = async () => {
    try {
      const userToken = await localStorage.getItem('userToken');
      return userToken !== null;
    } catch (error) {
      console.error('Error checking if logged in:', error);
      return false;
    }
  };

  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={LoginPage}
            options={{
              headerShown: true,
              headerTitle: () => (
                <Text style={styles.headerText}>Login to TFT </Text> // Custom header text
              ),
            }}
          />
          <Stack.Screen
            name="Home"
            component={HomePage}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
        <Toast ref={(ref) => Toast.setRef(ref)} />

      </NavigationContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0, // Add padding according to status bar
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 10, // Adjust margin top as needed
  },
});

export default App;
