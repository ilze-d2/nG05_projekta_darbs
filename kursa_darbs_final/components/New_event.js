import * as React from 'react';
import { FlatList, StyleSheet, Text, View, Button} from 'react-native';

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
});

const New_event = ({navigation}) => {
  return (
    <View style={styles.container}>
    <Button
        title='Event'
        onPress={() => navigation.navigate('Event', {
          })}
      />
      <View style={{marginBottom:1}}></View>
      <Button
        title='Task'
        onPress={() => navigation.navigate('Task', {
          })}
      />
      <View style={{marginBottom:1}}></View>
      <Button
        title='Reminder'
        onPress={() => navigation.navigate('Reminder', {
          })}
      />
    </View>
  );
}

export default New_event;