import * as React from 'react';
import { Button, View, Text, } from 'react-native';
import { useState } from 'react';
import {Calendar, calendarTheme, Agenda} from 'react-native-calendars';

export default function Calendar_screen ({ navigation,stock }) {
  const [counter, setCounter] = useState(0);
  return (
    
  <Agenda
    items={{
      '2021-12-18': [{name: 'item 1 - any js object'}],
      '2021-12-23': [{name: 'item 2 - any js object', height: 80}],
      '2021-12-24': [],
      '2021-12-25': [{name: 'item 3 - any js object'}, {name: 'any js object'}]
    }}
    loadItemsForMonth={(month) => {console.log('trigger items loading')}}
    onCalendarToggled={(calendarOpened) => {console.log(calendarOpened)}}
    onDayPress={(day) => {console.log('day pressed')}}
    onDayChange={(day) => {console.log('day changed')}}
    selected={'2021-12-17'}
    minDate={'2021-12-01'}
    maxDate={'2021-12-26'}
    pastScrollRange={50}
    futureScrollRange={50}
    renderItem={(item, firstItemInDay) => {return (<View />);}}
    renderDay={(day, item) => {return (<View />);}}
    renderEmptyDate={() => {return (<View  />);}}
    renderKnob={() => {return (<View />);}}
    renderEmptyData = {() => {return (<View />);}}
    rowHasChanged={(r1, r2) => {return r1.text !== r2.text}}
    hideKnob={true}
    showClosingKnob={false}
    markedDates={{
      '2021-12-18': {selected: true, marked: true},
      '2021-12-23': {marked: true},
      '2021-12-24': {disabled: true}
    }}
    disabledByDefault={true}
    onRefresh={() => console.log('refreshing...')}
    refreshing={false}
    refreshControl={null}
    theme={{
      ...calendarTheme,
      agendaDayTextColor: 'yellow',
      agendaDayNumColor: 'green',
      agendaTodayColor: 'red',
      agendaKnobColor: 'blue'
    }}
    />
  );
}