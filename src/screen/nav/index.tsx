import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { AntDesign, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

import * as RootNavigation from './RootNavigation';

export default function() {

  const FOOD = 'Food';
  const EVENTS = 'Events';
  const HOME = 'Home';
  const NEWS = 'News';
  const PROFILE = 'Profile';
  
  const [selected, setSelected] = useState('Festivals');

  const _navigate = (screen:string) => {
    setSelected(screen);
    RootNavigation.navigate(screen);
  }

  return (
    <View>
      {/* {(selected !== 'Festivals') ? 
      ( */}
      <View style={styles.container}>
      <TouchableOpacity onPress={() => _navigate(FOOD)} style={{flex:1, margin:5, alignItems: 'center'}}>
        <Ionicons name="fast-food-outline" size={32} color={FOOD === selected ? "#ffa500" : 'grey'} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => _navigate(EVENTS)} style={{flex:1, margin:5, alignItems: 'center'}}>
        <Ionicons name="calendar-outline" size={32} color={EVENTS === selected ? "#ffa500" : 'grey'} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => _navigate(HOME)} style={{flex:1, margin:5, alignItems: 'center'}}>
        <Ionicons name="map" size={32} color={HOME === selected ? "#ffa500" : 'grey'} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => _navigate(NEWS)} style={{flex:1, margin:5, alignItems: 'center'}}>
        <Ionicons name="newspaper-outline" size={32} color={NEWS === selected ? "#ffa500" : 'grey'} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => _navigate(PROFILE)} style={{flex:1, margin:5, alignItems: 'center'}}>
        <Ionicons name="person-outline" size={32} color={PROFILE === selected ? "#ffa500" : 'grey'} />
      </TouchableOpacity>
      <View style={styles.blankspace}></View>
      </View>
      {/* ) :
      null
      } */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,  
    position: "absolute",
    bottom: 0,
    zIndex: 1000,
    flexDirection: 'row',
    backgroundColor: '#000',
  },
  blankspace: {
    height: 75,
    alignSelf: 'stretch'
  }
});
