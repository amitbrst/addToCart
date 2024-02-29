import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomePage from './src/screens/HomePage';
import ProductPage from './src/screens/ProductPage';
import CartPage from './src/screens/CartPage';
import {Provider} from 'react-redux';
import { MyStore } from './src/redux/MyStore';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={MyStore}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Redux Toolkit Demo" component={ProductPage} options={{ headerShown: false }} />
          <Stack.Screen name="CartPage" component={CartPage} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
