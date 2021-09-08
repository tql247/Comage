import * as React from 'react';
import {Dimensions, FlatList, StyleSheet} from 'react-native';

import { Text, View } from '../components/Themed';
import {ChapterContent} from "../components/ChapterContent";
import {Icon} from 'react-native-elements';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {useEffect, useState} from "react";
import {APIConfig} from "../config";
import {ChapterBottomNav} from "../components/ChapterBottomNav";

const {height} = Dimensions.get("window");

export default function ReadingScreen({props, navigation, route} : any) {
    const insets = useSafeAreaInsets();
    const [chapter, setChapter] = useState({
        chapterId: route.params.chapterId,
        chapterName: route.params.chapterName,
        updatedAt: route.params.updatedAt
    });

    return (
        <View  style={{ position: "relative", flex: 1, paddingTop: insets.top}}>
            <View style={[styles.topFab, {top: insets.top}]}>
                <View style={styles.fabItem}>
                    <Icon onPress={() => (navigation.goBack())} size={30} color={"#666666"} name={"chevron-back"} type={"ionicon"} />
                </View>
                <View style={{marginHorizontal: 10}}>
                    <Text style={styles.chapterTitle}>
                        {chapter.chapterName.slice(0, 30) + (chapter.chapterName.length > 30?"...":"")}
                    </Text>
                    <Text style={{color: "#666666", fontStyle: "italic"}}>{chapter.updatedAt}</Text>
                </View>
            </View>
            <View style={{marginTop: 47, height: height - 80, backgroundColor: "#ccc"}}>
                {chapter.chapterId}
                <FlatList
                    extraData={chapter}
                    style={styles.scrollView}
                    data={[1]}
                    renderItem={({item}) => (
                        <ChapterContent chapter={chapter} />
                    ) }
                />
            </View>
            <ChapterBottomNav setChapter={setChapter} chapterId={route.params.chapterId} mangaProviderId={route.params.mangaProviderId}/>
        </View>
    );
}

const styles = StyleSheet.create({
    scrollView: {
        borderWidth: 0,
        borderColor: "transparent",
        shadowColor: 'transparent',
    },
    container: {
        borderWidth: 0,
        borderColor: "transparent",
        shadowColor: 'transparent',
    },
    chapterTitle: {
        fontSize: 20,
        color: "#464846",
        overflow: "hidden"
    },
    topFab: {
        borderTopColor: "#666666",
        position: 'absolute',
        left: 0,
        color: "#666666",
        flexDirection: "row",
        width: "100%",
        flex: 1,
        flexGrow: 1,
        zIndex: 10000,
        backgroundColor: "white"
    },
    fab: {
        paddingVertical: 5,
        position: 'absolute',
        left: 0,
        bottom: 0,
        color: "#666666",
        justifyContent: "space-around",
        flexDirection: "row",
        width: "100%",
        zIndex: 10000,
    },
    fabItem: {
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
    },
    fabItemText: {
        fontSize: 20,
        color: "#666666",
        alignItems: "center",
        justifyContent: "center",
    },
});
