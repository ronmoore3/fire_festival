import React, { useState } from 'react';
import { Text, StyleSheet, View, Modal, TouchableOpacity, Pressable, Image } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import data from '../../data/events.json';
import { Video, AVPlaybackStatus } from 'expo-av';

const images = {
  tl: require('../../../static/map_TL.png'),
  tr: require('../../../static/map_TR.png'),
  bl: require('../../../static/map_BL.png'),
  br: require('../../../static/map_BR.png'),
};


export default function() {
  const [selected, setSelected] = useState('null');

  const _select = (video:string) => {
    setSelected(video);
  }

  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});

  return (
    <View style={{flex:1}}>
      <View style={{...styles.container, flexDirection: 'row'}}>
        <Ionicons name="bonfire-outline" size={36} color={"#fff"} />
        <Text style={{flex: 1, fontFamily: 'Helvetica', fontSize: 36, fontWeight: 'bold', color: '#fff'}}>&nbsp;Festival Map</Text>
      </View>
      <View style={{flex:1, flexDirection: 'row'}}>
        <TouchableOpacity activeOpacity={1} 
          style={{flex: 1, backgroundColor: 'blue'}}
          onPress={() => _select('jennie')}
        >
          <Image style={{flex:1, width: '100%'}} source={images.tl} />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={1} 
          style={{flex: 1, backgroundColor: 'blue'}}
          onPress={() => _select('ari')}
        >
          <Image style={{flex:1, width: '100%'}} source={images.tr} />
        </TouchableOpacity>
      </View>
      <View style={{flex:1, flexDirection: 'row'}}>
        <View 
          style={{flex: 1, backgroundColor: 'blue'}}
        >
          <Image style={{flex:1, width: '100%'}} source={images.bl} />
        </View>
        <TouchableOpacity activeOpacity={1} 
          style={{flex: 1, backgroundColor: 'blue'}}
          onPress={() => _select('billie')}
        >
          <Image style={{flex:1, width: '100%'}} source={images.br} />
        </TouchableOpacity>
      </View>
      <Modal
          animationType="slide"
          transparent={true}
          visible={selected != 'null'}
          onRequestClose={() => _select('null')}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              {
                (selected == 'jennie') ?
                <Video
                  ref={video}
                  style={styles.video}
                  source={require('../../../static/jennie.mp4')}
                  useNativeControls
                  resizeMode="contain"
                  isLooping
                  onPlaybackStatusUpdate={status => setStatus(() => status)}
                /> :
                (
                  (selected == 'ari') ?
                  <Video
                    ref={video}
                    style={styles.video}
                    source={require('../../../static/ari.mp4')}
                    useNativeControls
                    resizeMode="contain"
                    isLooping
                    onPlaybackStatusUpdate={status => setStatus(() => status)}
                  /> :
                  (
                    (selected == 'billie') ?
                    <Video
                      ref={video}
                      style={styles.video}
                      source={require('../../../static/billie.mp4')}
                      useNativeControls
                      resizeMode="contain"
                      isLooping
                      onPlaybackStatusUpdate={status => setStatus(() => status)}
                    /> :
                    null
                  )
                )
              }
              
            <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => _select('null')}
              >
                <Text style={styles.textStyle}>Close</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    
    backgroundColor: '#000',
    paddingTop: 75,
    paddingBottom: 50,
    paddingHorizontal: 25
  },
  category: {
    backgroundColor: '#7dddfb',
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
  },
  video: {
    alignSelf: 'center',
    width: 300,
    height: 200,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "black",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    marginTop: 10,
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
});





