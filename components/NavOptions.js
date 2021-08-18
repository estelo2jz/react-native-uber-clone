import React from 'react';
import tw from 'tailwind-react-native-classnames';
import { Icon } from 'react-native-elements';
import { Text, View, FlatList, TouchableOpacity, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native';

const data = [
  {
    id: "123",
    title: "Get a ride",
    image: "https://links.papareact.com/3pn",
    screen: 'MapScreen'
  },
  {
    id: "456",
    title: "Order food",
    image: "https://links.papareact.com/28w",
    screen: 'EatsScreen',
  },
]

const NavOptions = () => {

  const navigation = useNavigation();

  return (
    <FlatList 
      data={data}
      keyExtractor={(item) => item.id}
      horizontal
      renderItem={({item}) => (
        <TouchableOpacity
        onPress={() => navigation.navigate(item.screen)}
          style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}
        >
          <Image 
            source={{ uri: item.image }}
            style={{width: 120, height: 120, resizeMode: 'contain'}}
          />
          <Text style={tw`mt-2 text-lg font-bold`}>{item.title}</Text>
          <Icon
            name="arrowright"
            color="white"
            type="antdesign"
            style={tw`p-2 bg-black rounded-full w-10 mt-4`}
          />
        </TouchableOpacity>
      )}
      style={{
        marginTop: 50,
      }}
    />
  )
}

export default NavOptions