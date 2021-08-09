import React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const data = [
  {
    id: '1',
    title: 'Get a ride',
    image: 'https://links.papareact.com/3pn',
    screen: 'Map',
  },
  {
    id: '2',
    title: 'Get a eats',
    image: 'https://links.papareact.com/28w',
    screen: 'Eats',
  },
];

const NavOptions = () => {
  const navigation = useNavigation();
  return (
    <View>
      <FlatList
        keyExtractor={(item) => item.id}
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          padding: 1,
        }}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={tw`bg-gray-200 ml-4 p-8 w-40`}
            onPress={() => navigation.navigate(item.screen)}
          >
            <View>
              <Image
                source={{ uri: item.image }}
                style={{ width: 120, height: 120, resizeMode: 'contain' }}
              />
              <Text style={tw`text-lg font-semibold`}>{item.title}</Text>
              <View
                style={[
                  tw`rounded-full bg-black w-10 h-10 mt-2`,
                  { alignItems: 'center', justifyContent: 'center' },
                ]}
              >
                <MaterialCommunityIcons
                  name="arrow-right"
                  size={20}
                  color="white"
                />
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({});

export default NavOptions;
