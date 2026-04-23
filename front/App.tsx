import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CreateTicketScreen from './src/screens/CreateTicketScreen';
import HomeScreen from './src/screens/HomeScreen';
import { RootStackParamList } from './src/navigation/types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: '#F7FBFF',
          },
          headerTintColor: '#5AAEF5',
          headerTitleStyle: {
            fontWeight: '700',
          },
          contentStyle: {
            backgroundColor: '#F7FBFF',
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CreateTicket"
          component={CreateTicketScreen}
          options={{ title: 'チケット作成' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
