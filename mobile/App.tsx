import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import { Feather } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import { Nunito_600SemiBold, Nunito_700Bold, Nunito_800ExtraBold  } from '@expo-google-fonts/nunito';

import mapMarker from './src/images/map-marker.png';

export default function App() {
  const [fontsLoaded] = useFonts({
    Nunito_600SemiBold,
    Nunito_700Bold,
    Nunito_800ExtraBold
  });

  if (!fontsLoaded){
    return null;
  }

  return (
    <View style={styles.container}>
     <MapView 
     style={styles.map}
     initialRegion={{
        latitude: -5.808859,
        longitude: -35.2186505,
        latitudeDelta: 0.008,
        longitudeDelta: 0.008,
     }}
      >
        <Marker 
        icon={mapMarker}
        calloutAnchor={{
          x:2.7,
          y:0.8,
        }}
        coordinate={{
          latitude: -5.808859,
          longitude: -35.2186505,
        }}
        >
          <Callout tooltip={true} onPress={() => {}}>
          <View style={styles.calloutContainer}>
            <Text style={styles.calloutText}>Lar das crianças</Text>
          </View>
          </Callout>
        </Marker>
      </MapView>
      <View style={styles.footer}>
        <Text style={styles.footerText} > 2 orfanatos encontrados</Text>
      <TouchableOpacity style={styles.createOrphanageButton} onPress={() => {}}>
        <Feather name="plus" size={20} color="#FFF"></Feather>
      </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  calloutContainer:  {
    width: 160,
    height: 46,
    paddingHorizontal: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 16,
    justifyContent: 'center',
    elevation: 3,
  },
  calloutText: {
    fontFamily: 'Nunito_700Bold',
    color:'#0089a5',
    fontSize: 14,
  },
  footer: {
    position: 'absolute',
    left: 24,
    right: 24,
    bottom: 32,
    backgroundColor: '#FFF',
    borderRadius: 20,
    height: 40,
    paddingLeft: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 3,
  },
  footerText: {
    fontFamily: 'Nunito_700Bold',
    color:'#8fa7b3'
  },
  createOrphanageButton: {
    width: 56,
    height: 56,
    backgroundColor: '#15c3d6',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems:'center',
  }
  
});
