import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import * as React from "react";
import useColorScheme from "../hooks/useColorScheme";
import TabOneScreen from "../screens/TabOneScreen";
import TabTwoScreen from "../screens/TabTwoScreen";
import { MainTabParamList } from "../types";
import { Fontisto} from "@expo/vector-icons";
import Colors from "../constants/Colors";

const MainTab = createMaterialTopTabNavigator<MainTabParamList>();

export default function MainTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <MainTab.Navigator
      initialRouteName="Chats"
      tabBarOptions={{
        activeTintColor: Colors[colorScheme].background,
        style: {
          backgroundColor: Colors[colorScheme].tint,
        },
        indicatorStyle: {
          backgroundColor:Colors[colorScheme].background,
          height: 4
        },
        labelStyle: {
          fontWeight: 'bold'
        },
        showIcon: true,
      }}
    >
      <MainTab.Screen
        name="Camera"
        component={TabOneScreen}
        options={{ 
          tabBarIcon: ({}) => <Fontisto name="camera" size={18} color={'#ffffff73'} />,
          tabBarLabel: () => { return null} }}
      />
      <MainTab.Screen
        name="Chats"
        component={TabTwoScreen}
      />
      <MainTab.Screen
        name="Status"
        component={TabTwoScreen}
      />
      <MainTab.Screen
        name="Calls"
        component={TabTwoScreen}
      />
    </MainTab.Navigator>
  );
}
