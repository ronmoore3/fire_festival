import React from 'react';
import { Text, StyleSheet, View, Image, TouchableOpacity, FlatList } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import * as RootNavigation from '../nav/RootNavigation';
import data from '../../data/food_vendors.json';

const images = {
  Sandwich: require('../../../static/food_bbq1.jpg'),
  'Half Ribs': require('../../../static/food_bbq2.jpg'),
  'Wings 6 pc': require('../../../static/food_bbq3.jpg'),
  'Rolls': require('../../../static/food_ramen1.jpg'),
  'Ramen': require('../../../static/food_ramen2.jpg'),
  'Cheese Pizza': require('../../../static/food_pizza1.jpg'),
  'Specialty Pizza': require('../../../static/food_pizza2.jpg'),
  'Cheese Fries': require('../../../static/food_pizza3.jpg')
};

export function VendorPage(props:any) {
  const item = props.route.params.item;

  const _renderMenuItem = ({item}:any) => (
    <View style={{marginVertical: 5}}>
      <View style={{
        alignSelf: 'stretch',
        justifyContent: 'center',
        backgroundColor: '#7dddfb'
      }}>
        <View style={{flexDirection: 'row', paddingVertical: 10, paddingHorizontal: 20,}}>
          <Text style={{flex: 1, fontSize: 20, fontWeight: 'bold',}}>{item.item}</Text>
          <Text style={{flex: 1, fontSize: 20, fontWeight: 'bold',}}>{item.price}</Text>
          <Text style={{flex: 1, fontSize: 20, fontWeight: 'bold',}}>{item.availability}</Text>
        </View>

      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        <Ionicons name="fast-food-outline" size={36} color={"#fff"} />
        <Text style={{flex: 1, fontFamily: 'Helvetica', fontSize: 36, fontWeight: 'bold', color: '#fff'}}>&nbsp;Food</Text>
      </View>
      <View style={{flexDirection: 'row', backgroundColor: '#fff', paddingVertical: 10, paddingHorizontal: 20, marginVertical: 12}}>
        <Text style={styles.text}>{item.name}</Text>
        <TouchableOpacity 
          style={{backgroundColor:'#3399FF', flexDirection:'row', justifyContent:'center', alignItems:'center', padding:5, borderRadius: 5, overflow: 'hidden'}}
          onPress={() => console.log('Vendor', {item})}
        >
          <Text style={{fontFamily: 'Helvetica', fontSize: 16, color: 'white'}}>Order</Text>
        </TouchableOpacity>
      </View>
      <FlatList 
        data={item.menu}
        renderItem={_renderMenuItem}
        keyExtractor={item => item.name}
      />
      <View style={{
        alignSelf: 'stretch',
        justifyContent: 'center',
        backgroundColor: '#7dddfb'
      }}>
        <View style={{flexDirection: 'row', paddingVertical: 10, paddingHorizontal: 20,}}>
          <Text style={{flex: 1, fontSize: 20, fontWeight: 'bold',}}>Wait Time</Text>
          <Text style={{flex: 1, fontSize: 20, fontWeight: 'bold',}}>{item["wait time"]}</Text>
        </View>
      </View>
    </View>
  )
}

export default function() {

  const _renderVendorItem = ({item}: any) => {

    const _navigate = (screen:string, params?:{}) => {
      RootNavigation.navigate(screen, params);
    }

    return (
    <View style={styles.category}>
      <View style={{flexDirection: 'row', backgroundColor: '#fff', paddingVertical: 10, paddingHorizontal: 20,}}>
        <Text style={styles.text}>{item.name}</Text>
        <TouchableOpacity 
          style={{backgroundColor:'#3399FF', flexDirection:'row', justifyContent:'center', alignItems:'center', padding:5, borderRadius: 5, overflow: 'hidden'}}
          onPress={() => _navigate('Vendor', {item})}
        >
          <Text style={{fontFamily: 'Helvetica', fontSize: 16, color: 'white'}}>Order</Text>
        </TouchableOpacity>
      </View>
      <FlatList 
        data={item.menu}
        renderItem={_renderMenuItem}
        keyExtractor={item => item.name}
        horizontal={true}
      />
    </View>
  )};

  const _renderMenuItem = ({item}: any) => {
    console.log(item.picture)
    return (
    <View style={{height:150, width:item.width, marginRight: 5, backgroundColor: item.color}}>
      <Image style={{flex:1,width:'100%'}} source={images[item.item]} />
    </View>
  )};
  
  return (
    <View style={styles.container}>
      
      <View style={{flexDirection: 'row'}}>
        <Ionicons name="fast-food-outline" size={36} color={"#fff"} />
        <Text style={{flex: 1, fontFamily: 'Helvetica', fontSize: 36, fontWeight: 'bold', color: '#fff'}}>&nbsp;Food</Text>
      </View>

      <FlatList 
        data={data.vendors}
        renderItem={_renderVendorItem}
        keyExtractor={item => item.name}
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
    alignSelf: 'stretch',
    // alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 12, 
  },
  text: {
    flex:1,
    marginTop: 5,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    backgroundColor: '#fff'
  },
  subtext: {
    fontSize: 12
  }
  
});