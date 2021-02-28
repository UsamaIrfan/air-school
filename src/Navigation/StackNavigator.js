import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from "../Screens/AuthScreens/Home";
import SignUp from "../Screens/AuthScreens/SignUp";
import Login from "../Screens/AuthScreens/Login";
import CompanySignUp from "../Screens/AuthScreens/CompanySignUp";
import DrawerNavigation from "./DrawerNavigation";

const StackNavigator = () => {

      const Stack = createStackNavigator();
      
      return (
      <NavigationContainer>
         <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="CompanySignUp" component={CompanySignUp} />
            <Stack.Screen name="DrawerNavigation" component={DrawerNavigation} />
         </Stack.Navigator>
      </NavigationContainer>
   );
}

export default StackNavigator
