import React, { useState } from 'react';
import { Text, StyleSheet, View, Image, TouchableOpacity, FlatList } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import data from '../../data/events.json';

export default function() {
  
  const hardDATA = [
    {
      title: 'Username',
      info: 'zuzu'
    },
    {
      title: 'Email',
      info: 'zuko@litty.com'
    },
    {
      title: 'Name',
      info: 'Prince Zuko'
    },
    {
      title: 'Phone:',
      info: '(123) 867-5309'
    },
    {
      title: 'Date of Birth',
      info: '12/31/2010'
    }
  ]
  
  const [selected, setSelected] = useState('null');

  const _select = (event:string) => {
    setSelected(selected == event ? 'null' : event);
  }

  const _renderProfileItem = ({item}: any) => (
    <View style={{marginVertical: 5}}>
      <View style={styles.category}>
        <View style={{flexDirection: 'row', paddingVertical: 10, paddingHorizontal: 20,}}>
          <View style={styles.text}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>{item.title}</Text>
            <Text style={{textAlign : "center"}}>{item.info}</Text>
          </View>
        </View>
      </View>
    </View>
  );


  return (
    <View style={styles.container}>

      <View style={{flexDirection: 'row'}}>
        <Ionicons name="person-outline" size={36} color={"#fff"} />
        <Text style={{flex: 1, fontFamily: 'Helvetica', fontSize: 36, fontWeight: 'bold', color: '#fff'}}>&nbsp;Profile</Text>
      </View>

      <FlatList 
        data={hardDATA}
        renderItem={_renderProfileItem}
        keyExtractor={item => item.title}
      />

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingTop: 75,
    paddingBottom: 75,
    paddingHorizontal: 25
  },
  category: {
    backgroundColor: '#7dddfb',
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    flex:4,
    color: '#000',
  },
  subtext: {
    fontSize: 12
  }
  
});





