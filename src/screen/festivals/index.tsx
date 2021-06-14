import React, {useState} from 'react';
import { Text, StyleSheet, View, Image, TouchableOpacity, FlatList } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import data from '../../data/food_vendors.json';
import { SearchBar } from 'react-native-elements';
import * as RootNavigation from '../nav/RootNavigation';



const images = {
  ff: require('../../../static/class.jpg')
};

function FestivalBox(props:any) {

  const _navigate = () => {
    RootNavigation.navigate('Events');
  }
  return (
    <View style={{flex:1, backgroundColor:'#7dddfb', height:150, margin: 2, alignItems: 'center', padding: 5, borderRadius: 10}}>
      <TouchableOpacity onPress={() => _navigate()}>
      <Text style={{textAlign:'center'}}>{props.festivalName}</Text>
      </TouchableOpacity>
      <Image style={{borderRadius: 10, flex:1,width:'95%'}} source={images[props.pic]} />
    </View>
  )
}

export default function() {

  const [search, setSearch] = useState('');

  

  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', marginBottom: 10}}>
        <Text style={{flex: 1, fontFamily: 'Helvetica', fontSize: 30, fontWeight: 'bold', color: '#fff', textAlign: 'center'}}>Select Your Festival</Text>
      </View>
      <SearchBar
        placeholder="Type Here..."
        onChangeText={(search:string) => setSearch(search)}
        value={search}
      />
      <Text style={{color:'white', fontSize:16, marginTop: 10}}>
        Your Upcoming Festivals
      </Text>
      <View style={{flexDirection: 'row'}}>
        <FestivalBox festivalName={'Fire Festival'} pic={'ff'}/>
        <FestivalBox festivalName={'Water Festival'} pic={'ff'}/>
      </View>

      <Text style={{color:'white', fontSize:16, marginTop: 10}}>
        Top Festivals
      </Text>
      <View style={{flexDirection: 'row'}}>
        <FestivalBox festivalName={'Fire Festival'} pic={'ff'}/>
        <FestivalBox festivalName={'Water Festival'} pic={'ff'}/>
      </View>
      <View style={{flexDirection: 'row'}}>
        <FestivalBox festivalName={'Fire Festival'} pic={'ff'}/>
        <FestivalBox festivalName={'Water Festival'} pic={'ff'}/>
      </View>
      <View style={{flexDirection: 'row'}}>
        <FestivalBox festivalName={'Fire Festival'} pic={'ff'}/>
        <FestivalBox festivalName={'Water Festival'} pic={'ff'}/>
      </View>
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