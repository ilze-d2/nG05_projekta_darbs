import * as React from 'react';
import { Button, View, Text, FlatList, StyleSheet} from 'react-native';
import { useState } from 'react';


export default function Home_Screen({ navigation,stock }) {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 15,
    },
    item: {
      padding: 1,
      fontSize: 18,
      height: 55,
      alignItems: 'center',
      textAlign: 'center',
      },
    });
  return (
    <View style={{ flex: 1, alignItems: 'center'}}>
    <Button title='Calendar'onPress={() => navigation.navigate ('Calendar_screen')} /> 
     <View style={styles.container}>
     <Text style={{textAlign: 'center', fontSize: 26, padding: 15}}>02.12.2012</Text>
      <FlatList
        data={[
          {key: '08:00 - 10:00  |  Saplulce'},
          {key: '10:00 - 11:00  |  Dokumentācija'},
          {key: '11:30 - 12:00  |  Tikšanās'},
          {key: '12:30 - 13:30  |  Brīvs'},
          {key: '14:00 - 16:30  |  Saplulce'},
          {key: '17:00 - 17:30  |  Pienākumu sadale'},
          {key: '20:00 - 21:20  |  Tikšanās'},
          {key: '00:00 - 00:00  |  Brīvs'},
]}
        renderItem={({item}) => 
        <Text style={styles.item}>{item.key}</Text>}/>
    </View>
    <Button style={{}} title='New event'onPress={() => navigation.navigate ('New_event')} /> 
    </View>
  
  );
}