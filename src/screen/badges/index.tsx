import React from 'react';
import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function() {
  
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        <Text style={{flex: 1, fontFamily: 'Helvetica', fontSize: 36, fontWeight: 'bold'}}>Achievements</Text>
        <TouchableOpacity style={{backgroundColor:'#3399FF', flexDirection:'row', justifyContent:'center', alignItems:'center', padding:10, borderRadius: 10, overflow: 'hidden'}}>
          <Text style={{fontFamily: 'Helvetica', fontSize: 16, color: 'white'}}>21,309&nbsp;</Text>
          <MaterialCommunityIcons name="shoe-print" size={16} color="white" />
        </TouchableOpacity>
      </View>
      
      <View style={styles.category}>
        <Image style={{flex:1,width:'100%'}} source={require('../../../static/food.jpeg')} />
        <Text style={styles.text}>Food and Cheat Meals</Text>
        <Text style={styles.subtext}>Starting at 10,000 <MaterialCommunityIcons name="shoe-print" size={12} color="black" /></Text>
      </View>
      <View
        style={{
          borderBottomColor: '#d3d3d3',
          borderBottomWidth: 1,
        }}
      />
      <View style={styles.category}>
        <Image style={{flex:1,width:'100%'}} source={require('../../../static/class.jpeg')} />
        <Text style={styles.text}>Classes</Text>
        <Text style={styles.subtext}>Starting at 75,000 <MaterialCommunityIcons name="shoe-print" size={12} color="black" /></Text>
      </View>
      <View
        style={{
          borderBottomColor: '#d3d3d3',
          borderBottomWidth: 1,
        }}
      />
      <View style={styles.category}>
        <Image style={{flex:1,width:'100%'}} source={require('../../../static/supp.jpeg')} />
        <Text style={styles.text}>Supplements and Accessories</Text>
        <Text style={styles.subtext}>Starting at 100,000 <MaterialCommunityIcons name="shoe-print" size={12} color="black" /></Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 75,
    paddingBottom: 75,
    paddingHorizontal: 25
  },
  category: {
    flex: 1,
    
    alignSelf: 'stretch',
    // alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 12, 
  },
  text: {
    marginTop: 5,
    fontSize: 14,
    fontWeight: 'bold'
  },
  subtext: {
    fontSize: 12
  }
  
});