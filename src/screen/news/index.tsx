import React, { useState } from 'react';
import { Text, StyleSheet, View, Image, TouchableOpacity, FlatList } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import data from '../../data/news.json';

export default function() {
  const [selected, setSelected] = useState('null');

  const _select = (news:string) => {
    setSelected(selected == news ? 'null' : news);
  }

  const _renderNewsItem = ({item}: any) => (
    <View style={{marginVertical: 5}}>
      <TouchableOpacity style={styles.category} activeOpacity={1} onPress={() => _select(item.name)}>
        <View style={{flexDirection: 'row', paddingVertical: 10, paddingHorizontal: 20,}}>
          <View style={styles.text}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>{item.title}</Text>
            <Text>{item.time}</Text>
            <Text>{item.lowerTitle}</Text>
          </View>
          <TouchableOpacity style={{flex: 1, backgroundColor:'#3399FF', flexDirection:'row', justifyContent:'center', alignItems:'center', padding:5, borderRadius: 5, overflow: 'hidden'}}>
            <Text style={{fontFamily: 'Helvetica', fontSize: 16, color: 'white'}}>Info</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
      { 
        selected === item.name ? 
        (
          <View style={{flexDirection: 'row', backgroundColor: '#000', justifyContent: 'center'}}>
            <View style={{backgroundColor:'#3a3a3a', width:'95%', paddingVertical: 10, paddingHorizontal: 10}}>

              <View style={{flexDirection: 'row', marginTop: 5}}>
              <FlatList 
                  data={item.friendsAttending}
                  renderItem={_renderInfoItem}
                  horizontal={true}
                  keyExtractor={item => item.name}
                />
              </View>
            </View>
          </View>
        ) : 
        null
      }
    </View>
  );

  const _renderInfoItem = ({item}:any) => (
    <View style={{backgroundColor: item, height: 50, width: 50, borderRadius: 25, marginHorizontal: 5}}></View>
  )

  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        <Ionicons name="newspaper-outline" size={36} color={"#fff"} />
        <Text style={{flex: 1, fontFamily: 'Helvetica', fontSize: 36, fontWeight: 'bold', color: '#fff'}}>&nbsp;News</Text>
      </View>
      <FlatList 
        data={data.news}
        renderItem={_renderNewsItem}
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
  subCategory: {
    backgroundColor: '#FEE3DC',
    alignSelf: 'stretch',
    // alignItems: 'center',
    justifyContent: 'center',
  },
  category: {
    backgroundColor: '#2CD1FD',
    alignSelf: 'stretch',
    // alignItems: 'center',
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





