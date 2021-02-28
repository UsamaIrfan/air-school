import React from 'react';
import { TextInput ,View, Text , StyleSheet, Dimensions, Image, StatusBar, TouchableOpacity} from "react-native";
import colors from "../Theme/Colors";
import {textLogo , MaterialIcons , Ionicons, FontAwesome5 } from "../../Contants";

const {height, width} = Dimensions.get("window")

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
       <StatusBar backgroundColor={colors.primary} />
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={textLogo} />
      </View>
      <View style={styles.buttonsContainer}>
          <TouchableOpacity onPress={() => navigation.navigate("Login")} activeOpacity={0.5} style={styles.button}>
            <Ionicons style={styles.icon} name="md-person" size={24} color={colors.white} />
            <Text style={styles.buttonText}>Log In</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("CompanySignUp")} activeOpacity={0.5} style={styles.button}>
            <FontAwesome5 style={styles.icon} name="building" size={24} color={colors.white} />
            <Text style={styles.buttonText}>Register Your Company</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("SignUp")} activeOpacity={0.5} style={styles.button}>
            <Ionicons style={styles.icon} name="md-person" size={24} color={colors.white} />
            <Text style={styles.buttonText}>Become A Student</Text>
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
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,

    elevation: 8,
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
    fontSize: width * 0.045
  },
  icon: {
    marginRight: width * 0.05,
  },
})

export default Home;