import "react-native-gesture-handler";
import React from "react";
import {
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  StatusBar,
} from "react-native";
import { Provider } from "react-redux";
import { HomeScreen } from "./screens";
import { store } from "./store";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MapScreen from "./screens/MapScreen";
import { GOOGLE_MAP_API_KEY } from "@env";

const Stack = createNativeStackNavigator();

export default function App() {
  console.log(GOOGLE_MAP_API_KEY);
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar barStyle="light-content" backgroundColor="#1fbad6" />
        <SafeAreaView style={styles.container}>
          <Stack.Navigator screenOptions={{ header: () => null }}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Map" component={MapScreen} />
            <Stack.Screen name="Eats" component={MapScreen} />
          </Stack.Navigator>
        </SafeAreaView>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight - 50 : 0,
  },
});
