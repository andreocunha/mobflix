import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Tab = createNativeStackNavigator();

import Home from './screens/Home';
import Register from './screens/Register';
import Edit from './screens/Edit';

export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} options={{ headerShown: false }}/>
        <Tab.Screen name="Register" component={Register} />
        <Tab.Screen name="Edit" component={Edit} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}