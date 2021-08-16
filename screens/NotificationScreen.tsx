import * as React from 'react';
import { StyleSheet, Image, ScrollView } from 'react-native';
import {NotificationList} from "../components/NotificationList";

export default function NotificationScreen() {

  return (
      <ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={styles.container}
          scrollEnabled={true}
      >
        <NotificationList/>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    height: '100%',
    minHeight: '100%',
    maxHeight: '100%',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
