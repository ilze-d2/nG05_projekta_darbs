import * as React from 'react';
import { FlatList, StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

const New_event = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={[
          {key: 'Event'},
          {key: 'Task'},
          {key: 'Reminder'},
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
      />
    </View>
  );
}

export default New_event;