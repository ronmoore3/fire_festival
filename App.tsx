import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { navigationRef } from './src/screen/nav/RootNavigation';
import HomeScreen, {VendorPage} from './src/screen/home';
import ShopScreen from './src/screen/shop';
import NavBar from './src/screen/nav';

const Stack = createStackNavigator();

function Badges() {
  return (
    <View style={styles.container}>
      <Text>Badges</Text>
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
        <Stack.Screen name='Food' component={HomeScreen} />
        <Stack.Screen name='Shop' component={ShopScreen} />
        <Stack.Screen name='Badges' component={Badges} />
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
