import * as React from 'react';
import { Button, View, Text, FlatList, StyleSheet} from 'react-native';
import { useState } from 'react';


export default function Home_Screen({ navigation,stock }) {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 22
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
      alignItems: 'center'
      },
    });
  return (
    <View style={{ flex: 1, alignItems: 'center'}}>
    <Button title='Calendar'onPress={() => navigation.navigate ('Calendar_screen')} /> 
     <View style={styles.container}>
      <FlatList
        data={[
          {key: 'Sapulce'},
          {key: 'Sapulce'},
          {key: 'Sapulce'},
          {key: 'Sapulce'},
          {key: 'Sapulce'},
          {key: 'Sapulce'},
          {key: 'Sapulce'},
          {key: 'Sapulce'},
          {key: 'Sapulce'},
          {key: 'Sapulce'},]}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}/>
    </View>
    <Button title='New event'onPress={() => navigation.navigate ('New_event')} /> 
    </View>
  
  );
}