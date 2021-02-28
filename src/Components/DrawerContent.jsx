import React from 'react'
import { StyleSheet, Text, View , Dimensions} from 'react-native'
import {DrawerContentScrollView, DrawerItem} from "@react-navigation/drawer";
import colors from "../Screens/Theme/Colors";
import {avatar, Entypo, Ionicons, FontAwesome5} from "../Contants"
import { TouchableOpacity } from 'react-native-gesture-handler';
import {Avatar} from "react-native-paper";

const {height, width} = Dimensions.get("window");

const DrawerContent = (props) => {
   const {navigation} = props
   return (
      <View style={styles.container}>
         <DrawerContentScrollView>
            <View style={styles.drawerHeader}>
               <TouchableOpacity onPress={() => navigation.toggleDrawer()} activeOpacity={0.8}>
                  <Entypo name="menu" size={30} color={colors.primary} />
               </TouchableOpacity>
            </View>
            <View style={styles.userInfo}>
               <Avatar.Image size={70} source={avatar} />
               <View style={styles.infoText}>
                  <Text style={{...styles.info, color: colors.primary, fontSize: width * 0.05}}>Usama Irfan</Text>
                   <Text style={styles.info}>usama.irfan9797@gmail.com</Text>
                  <Text style={styles.info}>Account Type: Student</Text>
               </View>
            </View>
            <DrawerItem onPress={() => navigation.navigate("Home")} label={() => <Text style={{...styles.info, color: colors.primary, fontSize: width * 0.05}}>Home</Text>} icon={() => <Ionicons name="md-home" size={24} color={colors.primary} />} />
            <DrawerItem onPress={() => navigation.navigate("About")} label={() => <Text style={{...styles.info, color: colors.primary, fontSize: width * 0.05}}>About</Text>} icon={() => <FontAwesome5 name="info" size={24} color={colors.primary} />} />
         </DrawerContentScrollView>
      </View>
   )
}

export default DrawerContent

const styles = StyleSheet.create({
   container: {
      flex: 1,
   },
   drawerHeader: {
      height: height * 0.07,
      top: - height * 0.006,
      alignItems: "center",
      flexDirection: "row",
      paddingHorizontal: width * 0.02
   },
   userInfo: {
      height: height * 0.2,
      paddingHorizontal: width * 0.02,
      flexDirection: "row",
      alignItems: "center",
   },
   infoText: {
      paddingLeft: width * 0.02,
      maxWidth: width * 0.55
   },
   info: {
      color: colors.lightGray,
   }
})
