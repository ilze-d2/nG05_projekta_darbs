import * as React from 'react';
import { Button, View, Text, } from 'react-native';
import { useState } from 'react';
import {Calendar, calendarTheme, Agenda} from 'react-native-calendars';

export default function Calendar_screen ({ navigation,stock }) {
  const [counter, setCounter] = useState(0);
  return (
  <Agenda
    items={{
      '2012-05-22': [{name: 'item 1 - any js object'}],
      '2012-05-23': [{name: 'item 2 - any js object', height: 80}],
      '2012-05-24': [],
      '2012-05-25': [{name: 'item 3 - any js object'}, {name: 'any js object'}]
    }}
    loadItemsForMonth={(month) => {console.log('trigger items loading')}}
    onCalendarToggled={(calendarOpened) => {console.log(calendarOpened)}}
    onDayPress={(day) => {console.log('day pressed')}}
    onDayChange={(day) => {console.log('day changed')}}
    selected={'2012-05-16'}
    minDate={'2012-05-10'}
    maxDate={'2012-05-30'}
    pastScrollRange={50}
    futureScrollRange={50}
    renderItem={(item, firstItemInDay) => {return (<View />);}}
    renderDay={(day, item) => {return (<View />);}}
    renderEmptyDate={() => {return (<View />);}}
    renderKnob={() => {return (<View />);}}
    renderEmptyData = {() => {return (<View />);}}
    rowHasChanged={(r1, r2) => {return r1.text !== r2.text}}
    hideKnob={true}
    showClosingKnob={false}
    markedDates={{
      '2012-05-16': {selected: true, marked: true},
      '2012-05-17': {marked: true},
      '2012-05-18': {disabled: true}
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