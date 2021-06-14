import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { navigationRef } from './src/screen/nav/RootNavigation';
import FoodScreen, {VendorPage} from './src/screen/food';
import EventsScreen from './src/screen/events';
import ProfileScreen from './src/screen/profile';
import NavBar from './src/screen/nav';
import NewsScreen from './src/screen/news';
import Map from './src/screen/map';

import News from './src/screen/map';
import Festivals from './src/screen/festivals';

const Stack = createStackNavigator();

function Home() {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
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
      <Stack.Navigator screenOptions={{headerShown: false, animationEnabled: false}} initialRouteName='Festivals'>
        <Stack.Screen name='Festivals' component={Festivals} />
        <Stack.Screen name='Food' component={FoodScreen} />
        <Stack.Screen name='Events' component={EventsScreen} />
        <Stack.Screen name='Home' component={Map} />
        <Stack.Screen name='News' component={NewsScreen} />
        <Stack.Screen name='Profile' component={ProfileScreen} />
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
