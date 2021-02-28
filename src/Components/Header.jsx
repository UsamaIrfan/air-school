import React from 'react'
import { StyleSheet, Text, View , Dimensions, Image, TouchableOpacity, StatusBar} from 'react-native'
import colors from "../Screens/Theme/Colors";
import {Entypo, whiteLogo, avatar} from "../Contants";
import {Avatar} from "react-native-paper";

const {height, width} = Dimensions.get("window")

const Header = ({navigation}) => {
   return (
      <View style={styles.container}>
         <StatusBar backgroundColor={colors.primary} />
         <TouchableOpacity onPress={() => navigation.toggleDrawer()} style={styles.headerLeft}>
            <Entypo name="menu" size={30} color={colors.white} />
         </TouchableOpacity>
         <View>
            <Image source={whiteLogo} style={styles.headerLogo} />
         </View>
         <TouchableOpacity>
            <Avatar.Image source={avatar} size={24} />
         </TouchableOpacity>
      </View>
   )
};

export default Header

const styles = StyleSheet.create({
   container: {
      height: height * 0.07,
      backgroundColor: colors.primary,
      paddingHorizontal: width * 0.03,
      alignItems: "center",
      flexDirection: "row",
      justifyContent: "space-between"
   },
   headerLogo: {
      width: width * 0.18,
      height: height * 0.05,
      right: width * 0.0025
   },
   headerLeft: {
   },
})
