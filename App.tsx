import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { navigationRef } from './src/screen/nav/RootNavigation';
import FoodScreen, {VendorPage} from './src/screen/food';
import EventsScreen from './src/screen/events';
import NavBar from './src/screen/nav';

const Stack = createStackNavigator();

function News() {
  return (
    <View style={styles.container}>
      <Text>News</Text>
    </View>
  );
}

function Stats() {
  return (
    <View style={styles.container}>
      <Text>Stats</Text>
    </View>
  );
}

function Profile() {
  return (
    <View style={styles.container}>
      <Text>Profile</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator screenOptions={{headerShown: false, animationEnabled: false}} initialRouteName='Home'>
        <Stack.Screen name='Food' component={FoodScreen} />
        <Stack.Screen name='Events' component={EventsScreen} />
        <Stack.Screen name='News' component={News} />
        <Stack.Screen name='Stats' component={Stats} />
        <Stack.Screen name='Profile' component={Profile} />
        <Stack.Screen name='Vendor' component={VendorPage} />
      </Stack.Navigator>
      <NavBar />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
