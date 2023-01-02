import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import tw from 'twrnc';
import MyListActivity from './screens/MyListActivity';
import HomeActivity from './screens/HomeActivity';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false, contentStyle: tw`bg-blue-300 p-2` }}
    >
      <Stack.Screen name={'HomeActivity'} component={HomeActivity} />
      <Stack.Screen name={'MyListActivity'} component={MyListActivity} />
    </Stack.Navigator>
  );
};

export default Navigation;
