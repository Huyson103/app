import React from 'react';
import 'react-native-gesture-handler';

import Login from './screens/Login';
import Home from './screens/Home';
import TienTrinhDon from './screens/TienTrinhDonHang';
import DanhMucSanPham from './screens/DanhMucSanPham';

import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";

export default function App() {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions = {{
            headerShown: false,
        }}
        initialRouteName="Login">
        <Stack.Screen
          name = "Login"
          component={Login} 
          headerMode = 'none' 
        />
        <Stack.Screen 
          name = "Home" 
          component={Home}
        />
        <Stack.Screen
          name = "TienTrinhDon"
          component={TienTrinhDon}
        />
        <Stack.Screen
          name = "DanhMucSanPham"
          component={DanhMucSanPham}
        />
      </Stack.Navigator>
    </NavigationContainer>

    

    // <Login/>
    // <Home/>
    // <TienTrinhDon/>
    // <DanhMucSanPham/>
  );
}