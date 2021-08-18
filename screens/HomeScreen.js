import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../components/NavOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from "@env";

const HomeScreen = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image
          // source={require('../assets/logo/logo.svg')}
          source={{
            uri: "https://links.papareact.com/gzs"
          }}
          style={{
            width: 100,
            height: 100,
            resizeMode: 'contain',
          }}
        />

        <GooglePlacesAutocomplete
          placeholder="Where From?"
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: 'en',
          }}
          style={{
            container: {
              flex: 0,
            },
            textInput: {
              fontSize: 18,
            }
          }}
        />
        <NavOptions />
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  text: {
    color: 'blue',
  }
})