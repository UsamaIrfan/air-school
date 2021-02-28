import React from 'react';
import { TextInput ,View, Text , StyleSheet, Dimensions, Image, TouchableOpacity} from "react-native";
import colors from "./src/Screens/Theme/Colors";
import {textLogo , MaterialIcons , Ionicons } from "./src/Contants";
import Home from "./src/Screens/AuthScreens/Home";
import StackNavigator from "./src/Navigation/StackNavigator";
import {Provider} from 'react-redux';
import store from './src/Store';


const {height, width} = Dimensions.get("window")

const App = () => {
  return (
    <Provider store={store}>
      <StackNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({

})

export default App;