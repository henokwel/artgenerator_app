import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/components/Home';
import ShowRoom from './src/components/ShowRoom';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        headerMode="none"
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Showroom" component={ShowRoom} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}