import * as React from 'react';
import { StyleSheet, Dimensions } from 'react-native';

import { Text, View } from '../components/Themed';
import {FollowingList} from "../components/FollowingList";

const {width} = Dimensions.get("window");

export default function FollowScreen() {
  return (
      <View style={styles.container}>
        <FollowingList/>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 0,
    borderColor: "transparent",
    shadowColor: 'transparent',
  },
});
