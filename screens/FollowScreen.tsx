import * as React from 'react';
import { StyleSheet, Dimensions } from 'react-native';

import { Text, View } from '../components/Themed';
import {FollowingFlatList} from "../components/FollowingFlatList";

const {width} = Dimensions.get("window");

export default function FollowScreen() {
  return (
      <View style={styles.container}>
        <FollowingFlatList/>
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
