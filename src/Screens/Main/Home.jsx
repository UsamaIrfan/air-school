import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BottomTabNavigator from "../../Navigation/BottomTabNavigator";
import Header from "../../Components/Header";

const Home = ({navigation}) => {
   return (
      <React.Fragment>
         <Header navigation={navigation} />
         <BottomTabNavigator />
      </React.Fragment>
   )
}

export default Home

const styles = StyleSheet.create({})
