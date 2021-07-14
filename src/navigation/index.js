import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView} from 'react-native';
import Home from '../screens/Home';
import {bgColor, mainColor} from '../constants/colors';

const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: true,
          }}>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerStyle: {
                backgroundColor: mainColor,
              },
              headerTitleStyle: {
                alignSelf: 'center',
                color: bgColor,
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}
