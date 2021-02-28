import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Companies from "../Screens/Main/TabScreens/Companies";
import CompanyInfo from "../Screens/Main/TabScreens/CompanyInfo";
import Courses from "../Screens/Main/TabScreens/Courses";
import Students from "../Screens/Main/TabScreens/Students";
import { FontAwesome } from "../Contants";
import colors from "../Screens/Theme/Colors";

function BottomTabNavigator() {
  const Tab = createBottomTabNavigator();
  const admin = false
  if (!admin) {
    return (
      <Tab.Navigator tabBarOptions={{
        activeTintColor: colors.primary
      }}>
        <Tab.Screen options={{
          tabBarIcon: ({color}) => (<FontAwesome name="building" size={24} color={color} />)
        }} name="Companies" component={Companies} />
        <Tab.Screen options={{
          tabBarIcon: ({color}) => (<FontAwesome name="book" size={24} color={color} />)
        }} name="Courses" component={Courses} />
      </Tab.Navigator>
    );
  } else {
    return (
      <Tab.Navigator tabBarOptions={{
        activeTintColor: colors.primary
      }}>
        <Tab.Screen options={{
          tabBarIcon: ({color}) => (<FontAwesome name="building" size={24} color={color} />)
        }} name="CompanyInfo" component={CompanyInfo} />
        <Tab.Screen options={{
          tabBarIcon: ({color}) => (<FontAwesome name="book" size={24} color={color} />)
        }} name="Students" component={Students} />
      </Tab.Navigator>
    );
  }
}

export default BottomTabNavigator;