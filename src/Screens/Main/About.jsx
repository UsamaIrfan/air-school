import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Header from '../../Components/Header'

const About = ({navigation}) => {
   return (
      <View>
         <Header navigation={navigation} />
         <Text>About</Text>
      </View>
   )
}

export default About

const styles = StyleSheet.create({})
