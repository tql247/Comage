import * as React from 'react';
import {Dimensions, FlatList, Image, StyleSheet, TouchableOpacity} from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import {TopCarousel} from "../components/TopCarousel";
import {MainViewScroll} from "../components/MainViewScroll";
import {NewChapterList} from "../components/NewChapterList";
import {NewComic} from "../components/NewComic";
import * as Linking from "expo-linking";
import {GotMovieList} from "../components/GotMovieList";

const {height} = Dimensions.get("window");

export default function MainScreen({ navigation, props } : any) {
  return (
    <View style={styles.container}>
      <FlatList
          data={[1]}
          numColumns={1}
          renderItem={({item}) => (
              <View style={styles.container}>
                  <MainViewScroll/>
                  <View style={styles.threadContainer}>

                      <TouchableOpacity
                          onPress={() => (navigation.navigate('ListItemScreen'))}
                      >
                          <Text style={styles.threadTitle}>Top trending</Text>
                      </TouchableOpacity>
                      <NewChapterList {...props} navigation={navigation} />
                  </View>
                  <View style={styles.threadContainer}>

                      <TouchableOpacity
                          onPress={() => (navigation.navigate('ListItemScreen'))}
                      >
                          <Text style={styles.threadTitle}>New Chapter</Text>
                      </TouchableOpacity>
                      <NewChapterList {...props} navigation={navigation} />
                  </View>
                  <View style={styles.threadContainer}>
                      <Text style={styles.threadTitle}>New Comic</Text>
                      <NewComic />
                  </View>
                  <View style={styles.threadContainer}>
                      <Text style={styles.threadTitle}>Weekly</Text>
                      <NewComic />
                  </View>
                  <View style={styles.threadContainer}>
                      <Text style={styles.threadTitle}>Monthly</Text>
                      <NewComic />
                  </View>
                  <View style={styles.threadContainer}>
                      <Text style={styles.threadTitle}>Complete</Text>
                      <NewComic />
                  </View>
                  <View style={styles.threadContainer}>
                      <Text style={styles.threadTitle}>Got Movie/Anime</Text>
                      <GotMovieList {...props} navigation={navigation} />
                  </View>
              </View>
          ) }
      />
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
    scrollView: {
        borderWidth: 0,
        borderColor: "transparent",
        shadowColor: 'transparent',
        flex: 1,
        flexGrow: 1,
        height: "100%",
        minHeight: height,
    },
    threadContainer: {
        borderWidth: 0,
        margin: 2.5,
        borderColor: "transparent",
        shadowColor: 'transparent',
        marginBottom: 10
    },
    threadTitle: {
        color: "#ff7e5f",
        borderWidth: 0,
        margin: 2.5,
        fontSize: 18,
        fontWeight: "500",
        borderColor: "transparent",
        shadowColor: 'transparent',
    },
});
