import * as React from 'react';
import {Dimensions, FlatList, Image, StyleSheet} from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import {TopCarousel} from "../components/TopCarousel";
import {MainViewScroll} from "../components/MainViewScroll";
import {NewChapterList} from "../components/NewChapterList";
import {NewComic} from "../components/NewComic";
import {ListItem} from "../components/ListItem";

const {height} = Dimensions.get("window");

export default function ListItemScreen() {
    return (
        <View style={styles.container}>
            <FlatList
                data={[1]}
                numColumns={1}
                renderItem={({item}) => (
                    <View style={styles.container}>
                        <ListItem/>
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
        backgroundColor: "#efefef"
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
