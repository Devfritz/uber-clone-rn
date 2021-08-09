import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import tw from "tailwind-react-native-classnames";
import NavOptions from "../components/navOptions";

import { GOOGLE_MAP_API_KEY } from "@env";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { useDispatch } from "react-redux";
import { setOrigin, setDestination } from "../slices/navSlice";

export const HomeScreen = () => {
  console.log(GOOGLE_MAP_API_KEY);
  const dispatch = useDispatch();
  return (
    <View style={tw`p-5`}>
      <Image
        source={{ uri: "https://links.papareact.com/gzs" }}
        style={{ width: 120, height: 120, resizeMode: "contain" }}
      />
      <GooglePlacesAutocomplete
        placeholder="Where from ?"
        styles={{
          container: {
            flex: 0,
            marginBottom: 20,
          },
          textInput: {
            fontSize: 18,
          },
        }}
        onPress={(data, details = null) => {
          console.log(data);
          console.log(details);
        }}
        fetchDetails={true}
        enablePoweredByContainer={false}
        minLength={2}
        query={{
          key: GOOGLE_MAP_API_KEY,
          language: "fr",
        }}
        nearbyPlacesAPI="GooglePlacesSearch"
        debounce={400}
      />
      <NavOptions />
    </View>
  );
};

const styles = StyleSheet.create({});
