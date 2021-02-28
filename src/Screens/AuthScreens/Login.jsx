import React, {useState, useRef} from 'react';
import { TextInput ,View, Text , StyleSheet, Dimensions, Image, StatusBar, TouchableOpacity} from "react-native";
import colors from "../Theme/Colors";
import {textLogo , MaterialIcons , Ionicons , FontAwesome5 } from "../../Contants";

const {height, width} = Dimensions.get("window")

const Home = ({ navigation }) => {

   const input2 = useRef()

   const [Email, setEmail] = useState("")
   const [Password, setPassword] = useState("")

   const loginValidate = (Email, password) => {
      navigation.navigate("DrawerNavigation");
   }

   return (
    <View style={styles.container}>
       <StatusBar backgroundColor={colors.primary} />
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={textLogo} />
      </View>
      <View style={styles.inputsContainer}>
         <View style={styles.inputContainer}>
            <Ionicons style={styles.icon} name="md-person" size={24} color={colors.primary} />
            <TextInput returnKeyType="next" onSubmitEditing={() => input2.current.focus()} onChangeText={text => setEmail(text)} style={styles.input} placeholder="Email" />
         </View>
         <View style={styles.inputContainer}>
            <MaterialIcons style={styles.icon} name="lock" size={24} color={colors.primary} />
            <TextInput ref={input2} onSubmitEditing={() => console.log("Submitted")} onChangeText={text => setPassword(text)} style={styles.input} placeholder="Password" />
         </View>
      </View>
      <View style={styles.bottonSection}>
         <TouchableOpacity onPress={() => loginValidate(Email, Password)} activeOpacity={0.5} style={styles.button}>
            <Ionicons style={styles.icon} name="md-person" size={24} color={colors.white} />
            <Text style={styles.buttonText}>Log In</Text>
         </TouchableOpacity>
         <TouchableOpacity onPress={() => navigation.navigate("SignUp")} style={styles.bottomTextContainer} activeOpacity={0.5}>
            <Text style={styles.bottomText}>Dont Have an Account? </Text>
            <Text style={{...styles.bottomText, color: colors.primary}}>Sign Up</Text>
         </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    width: width * 0.6,
    height: height * 0.23
  },
  logoContainer: {
    flex: 1,
    shadowColor: "#000",
    backgroundColor: colors.white,
    justifyContent: "center",
    alignItems: "center",
  },
  inputsContainer: {
    flex: 1,
    paddingHorizontal: width * 0.08,
    justifyContent: "center",
    backgroundColor: colors.white,
  },
  inputContainer: {
     flexDirection: "row",
     alignItems: "center",
     borderBottomWidth: 2,
     borderColor: colors.primary,
     paddingVertical: height * 0.01,
     marginVertical: height * 0.005,
  },
  icon: {
    marginRight: width * 0.05,
  },
  input: {
     flex: 1,
  },
  bottonSection: {
     flex: .5,
     paddingHorizontal: width * 0.08,
     backgroundColor: colors.white,
     justifyContent: "space-between",
  },
  button: {
   flexDirection: "row",
   backgroundColor: colors.primary,
   height: height * 0.08,
   alignItems: "center",
   justifyContent: "center",
   marginVertical: 10,
 },
 buttonsContainer: {
   flex: 1,
   paddingHorizontal: width * 0.08,
   justifyContent: "center",
 },
 buttonText: {
   color: colors.white,
 },
 bottomTextContainer: {
    justifyContent: "center",
    flexDirection: "row",
    marginBottom: height * 0.005,
 },
 bottomText: {
    fontSize: width * 0.03,
 }

})

export default Home;