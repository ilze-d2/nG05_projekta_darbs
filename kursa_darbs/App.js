import 'react-native-gesture-handler';
import * as React from 'react';
import { Button, View, Text, Label, Input } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import {LocaleConfig} from 'react-native-calendars';

import Home_screen from './components/Home_screen';
import Calendar_screen from './components/Calendar_screen';
import New_event from './components/New_event';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
       <Stack.Screen name="Home_screen" component={Home_screen} options={{ title: 'Planer'}} />
       <Stack.Screen name="Calendar_screen" component={Calendar} options={{ title: 'Calendar'}}/>
       <Stack.Screen name="New_event" component={New_event} options={{ title: 'New event'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

