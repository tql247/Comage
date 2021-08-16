import * as React from 'react';
import {Image, StyleSheet} from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import {SettingList} from "../components/SettingList";
import {LogoutComponent} from "../components/LogoutComponent";

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <View style={[styles.centroid]}>
        <Image
            resizeMode="cover"
            style={[{ width: 200, height: 200 }, styles.avatar]}
            source={require('../assets/images/adminavatar.jpg')}
        />
      </View>
      <View style={styles.settings}>
          <SettingList />
      </View>
      <View style={styles.settings}>
          <LogoutComponent />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 0,
    borderColor: "transparent",
    shadowColor: 'transparent',
    backgroundColor: "#efefef"
  },
  centroid: {
    width: '100%',
    minWidth: '100%',
    margin: 0,
    padding: 0,
    alignItems: "center"
  },
  cover: {
    width: '100%',
    minWidth: '100%',
    margin: 0,
    padding: 0,
    alignItems: "center"
  },
  avatar: {
    margin: 30,
    borderRadius: 500,
    borderWidth: 1,
    borderColor: "#ccc"
  },
  settings: {
    marginTop: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
