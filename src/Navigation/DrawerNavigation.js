import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from "../Screens/Main/Home";
import About from "../Screens/Main/About";
import DrawerContent from "../Components/DrawerContent";


function MyDrawer() {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="About" component={About} />
    </Drawer.Navigator>
  );
}

export default MyDrawer;