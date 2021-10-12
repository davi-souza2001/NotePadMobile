import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo, Feather } from "@expo/vector-icons";
import 'react-native-gesture-handler';

import Tasks from "./pages/tasks";
import ConfigPage from './pages/configPage';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={
        {
          headerTintColor: "#fff",
          headerStyle: { backgroundColor: '#111827' },
          tabBarStyle: {
            backgroundColor: '#111827',
            borderTopColor: "transparent"
          },
          tabBarActiveTintColor: '#6D28D9'
        }}>
        <Tab.Screen initialRouteName name="Suas Notas" component={Tasks} options={{tabBarIcon: ({ size, color }) => (<Entypo name="home" size={size} color={color}/>)}} />
        <Tab.Screen name="Configurações" component={ConfigPage} options={{tabBarIcon: ({ size, color }) => (<Entypo name="book" size={size} color={color}/>)}} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}