import React from 'react'
import { StyleSheet, Text, View , Dimensions, TouchableOpacity } from 'react-native'
import {Avatar} from "react-native-paper";
import {avatar, Entypo, FontAwesome5} from "../../../Contants"
import colors from '../../Theme/Colors';

const {height, width} = Dimensions.get("window")

const CompanyInfo = () => {
   return (
      <View style={styles.container}>
         <View style={styles.infoHeader}>
            <View style={styles.mainInfoContainer}>
               <Avatar.Image source={avatar} size={120} />
               <Text style={styles.companyName}>Company Name</Text>
            </View>
            <TouchableOpacity activeOpacity={0.9} style={styles.signOutButton}>
               <Text style={styles.signOutText}>Sign Out</Text>
            </TouchableOpacity>
         </View>
         <View style={styles.infoContainer}>
            <View style={styles.bottomInfo}>
               <View style={styles.infoField}>
                  <FontAwesome5 style={styles.icon} name="pen" size={18} color={colors.primary} />
                  <Text style={{...styles.infoText, color: colors.primary}}>Tagline: </Text>
                  <Text style={styles.infoText}>Technology is innovation.</Text>
               </View>
               <View style={styles.infoField}>
                  <Entypo style={styles.icon} name="mail" size={18} color={colors.primary} />
                  <Text style={{...styles.infoText, color: colors.primary}}>Email: </Text>
                  <Text style={styles.infoText}>somone@noone.com</Text>
               </View>
               <View style={styles.infoField}>
                  <Entypo style={styles.icon} name="phone" size={18} color={colors.primary} />
                  <Text style={{...styles.infoText, color: colors.primary}}>Phone: </Text>
                  <Text style={styles.infoText}>+923218932626</Text>
               </View>
               <View style={styles.infoField}>
                  <Entypo style={styles.icon} name="address" size={18} color={colors.primary} />
                  <Text style={{...styles.infoText, color: colors.primary}}>Address: </Text>
                  <Text style={styles.infoText}>ABC Street near unknown road, lost city, Weird World.</Text>
               </View>
            </View>
         </View>
      </View>
   )
}

export default CompanyInfo

const styles = StyleSheet.create({
   container: {
      flex: 1,
   },
   infoHeader: {
      paddingTop: height * 0.03,
      backgroundColor: colors.primary,
      height: height * 0.35,
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: height * 0.035,
   },
   companyName: {
      fontSize: width * 0.06,
      color: colors.white,
   },
   infoContainer: {
      borderTopRightRadius: width * 0.9,
      zIndex: 2,
      paddingTop: height * 0.025,
      flex: 1,
   },
   mainInfoContainer: {
      alignItems: "center",
      maxWidth: width,
   },
   bottomInfo: {
      paddingHorizontal: width * 0.04,
      flex: 1,
      justifyContent: "space-around",
      paddingBottom: height * 0.07,
   },
   signOutButton: {
      backgroundColor: colors.white,
      width: width * 0.45,
      alignItems: "center",
      justifyContent: "center",
      height: height * 0.07,
      borderRadius: width * 0.2,
      top: height * 0.03,
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 3,
      },
      shadowOpacity: 0.27,
      shadowRadius: 4.65,

      elevation: 6,
   },
   signOutText: {
      color: colors.primary,
      fontSize: width * 0.045,
   },
   infoField: {
      flexDirection: "row",
      alignItems: "flex-start",
      maxWidth: width * 0.9,
   },
   icon: {
      marginRight: width * 0.02
   },
   infoText: {
      fontSize: width * 0.04,
      maxWidth: width * 0.7
   }
})
