import React, {useState, useRef} from 'react';
import { TextInput ,View, Text , StyleSheet, Dimensions, Image, StatusBar, TouchableOpacity} from "react-native";
import colors from "../Theme/Colors";
import {textLogo , MaterialIcons , Ionicons , FontAwesome5 } from "../../Contants";
import {firebase} from "../../config/Firebase";

const {height, width} = Dimensions.get("window")

const CompanySignUp = ({ navigation }) => {

   const input2 = useRef()
   const input3 = useRef()
   const input4 = useRef()
   const input5 = useRef()

   const [FirstName, setFirstName] = useState("")
   const [LastName, setLastName] = useState("")
   const [Email, setEmail] = useState("")
   const [Phone, setPhone] = useState("")
   const [Password, setPassword] = useState("")
   const [Error, setError] = useState(null)

   const signInAuth = () => {
      navigation.navigate("DrawerNavigation");
   //    firebase.auth().createUserWithEmailAndPassword(Email, Password)
   //   .then((user) => {
   //     // Signed in 
   //     var loggedInUser = userCredential.user;
   //     // ...
   //   })
   //   .catch((error) => {
   //     var errorCode = error.code;
   //     var errorMessage = error.message;
   //     setError(errorMessage);
   //     // ..
   //   });
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
            <TextInput returnKeyType="next" onSubmitEditing={() => input2.current.focus()} onChangeText={text => setFirstName(text)} style={styles.input} placeholder="First Name" />
         </View>
         <View style={styles.inputContainer}>
            <Ionicons style={styles.icon} name="md-person" size={24} color={colors.primary} />
            <TextInput returnKeyType="next" onSubmitEditing={() => input3.current.focus()} ref={input2} onChangeText={text => setLastName(text)} style={styles.input} placeholder="Last Name" />
         </View>
         <View style={styles.inputContainer}>
            <MaterialIcons style={styles.icon} name="email" size={24} color={colors.primary} />
            <TextInput returnKeyType="next" onSubmitEditing={() => input4.current.focus()} ref={input3} onChangeText={text => setEmail(text)} style={styles.input} placeholder="E-mail" />
         </View>
         <View style={styles.inputContainer}>
            <FontAwesome5 style={styles.icon} name="phone" size={24} color={colors.primary} />
            <TextInput returnKeyType="next" onSubmitEditing={() => input5.current.focus()} ref={input4} onChangeText={text => setPhone(text)} style={styles.input} placeholder="Phone" />
         </View>
         <View style={styles.inputContainer}>
            <MaterialIcons style={styles.icon} name="lock" size={24} color={colors.primary} />
            <TextInput onSubmitEditing={() => signInAuth()} ref={input5} onChangeText={text => setPassword(text)} style={styles.input} placeholder="Password" />
         </View>
      </View>
      <View style={styles.bottonSection}>
         <TouchableOpacity activeOpacity={0.5} style={styles.button}>
            <Ionicons style={styles.icon} name="md-person" size={24} color={colors.white} />
            <Text style={styles.buttonText}>Sign In</Text>
         </TouchableOpacity>
         <TouchableOpacity onPress={() => navigation.navigate("Login")}  style={styles.bottomTextContainer} activeOpacity={0.5}>
            <Text style={styles.bottomText}>Already Have an Account? </Text>
            <Text style={{...styles.bottomText, color: colors.primary}}>Log In</Text>
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

export default CompanySignUp;