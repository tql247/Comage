import React, { Component } from "react";
import {
    Image,
    StyleSheet,
    View,
    Dimensions,
    FlatList,
    TouchableOpacity
} from "react-native";
import { ListItem, Icon } from 'react-native-elements';
import {Text} from "./Themed";

interface Props {
    navigation: any
}

export class NewChapterList extends Component<Props>  {

    state = {
        users: [
            {
                title: 'Comage',
                newChapter: 'Chap 32: Release That Witch',
                lastUpdate: "Just now",
            },
            {
                title: 'Grand blue',
                newChapter: 'Chap 12: Gakkou no Minna to Isekai no Mujintou',
                lastUpdate: "30 mins ago",
                isFollowing: true,
                tag: [
                    "Action", "Adventure", "Comedy", "Drama", "Fantasy", "Harem" ,"Psychological" , "Romance"
                ]
            },
            {
                title: 'Soudouki tensei isekai',
                newChapter: 'Chap 111: Soredemo Ayumu wa Yosetekuru',
                lastUpdate: "1 hours ago",
            },
            {
                title: 'Konosuba',
                newChapter: 'Chap 45: ApretÉ El BotÓN Durante Un MillÓN new It, I Was The Strongest',
                lastUpdate: "1 hours ago",
            },
            {
                title: 'Overlord',
                newChapter: 'Chap 90: MP, 武炼巅峰',
                lastUpdate: "3 hours ago",
                isFollowing: false,
                tag: [
                    "Action" , "Adventure" , "Fantasy" , "Historical" , "Martial arts"
                ]
            },
            {
                title: 'Goblin Slayer',
                newChapter: 'Chap 78: うらら迷路帖 ; Urara 迷路帖',
                lastUpdate: "5 hours ago",
                isFollowing: false,
                tag: [
                    "Action" ,"Adventure", "Fantasy", "Historical" ,"Martial arts"
                ]
            },
            {
                title: 'Itensei Slime Dataken',
                newChapter: 'Chap 66: キルボードを駆使して最強に至る',
                lastUpdate: "1 day ago",
                isFollowing: false,
                tag: [
                    "Adventure", "Fantasy", "Shounen",
                ]
            },
            {
                title: 'Re: Zero',
                newChapter: 'Chap 12: ダイI (English); Diamond no Ace 2',
                lastUpdate: "1 day ago",
                isFollowing: false,
                tag: [
                    "Comedy" ,"School life", "Shounen", "Sports"
                ]
            },
            {
                title: 'To you, the immortal',
                newChapter: 'Chap 40: Оперативный отряд "Daishikkaku" ; 戦隊大失格',
                lastUpdate: "1 day ago",
            },
            {
                title: 'Chap 72: Blue Period',
                newChapter: 'ブルーピリオド',
                forwardScreen: "",
                lastUpdate: "1 day ago",
            }
        ]
    };

    renderTitle(name: string, chapter: string, time: string) {
        return (
            <>
                <Text style={styles.title}>
                    {name.slice(0, 50) + (name.length>50?"...":"")}
                </Text>
                <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                    <Text style={styles.chapter}>
                        {chapter.slice(0, 30) + (chapter.length>30?"...":"")}
                    </Text>
                    <Text style={styles.chapter}>
                        {time}
                    </Text>
                </View>
            </>
        )
    }

    renderImage(item: any) {
        return (
            <View style={styles.imgContainer}>
                {/*<Image*/}
                {/*    style={[styles.image, {backgroundColor: item.backgroundColor || "#feb47b"}]}*/}
                {/*    resizeMode="cover"*/}
                {/*    source={ { uri: item.imageCover }}*/}
                {/*/>*/}
                <View>
                    {this.renderTitle(item.title, item.newChapter, item.lastUpdate)}
                </View>
            </View>
        )
    }

    render() {
        return (
            <View style={styles.flatListContainer}>
                <FlatList
                    style={styles.scrollView}
                    data={this.state.users}
                    renderItem={({item}) => (
                        <View style={styles.imgContainer}>
                            <TouchableOpacity
                                onPress={() => (this.props.navigation.navigate(item.forwardScreen || "ComicDetailScreen", {subject: "Got Movie/Anime"}))}
                            >
                                {this.renderImage(item)}
                            </TouchableOpacity>
                        </View>
                    )}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    flatListContainer: {
        flex: 1
    },
    title: {
        color: "#767676",
        fontSize: 16,
        fontWeight: "500",
        flexWrap: "wrap",
    },
    chapter: {
        color: "#767676",
        fontWeight: "400",
        flexWrap: "wrap",
    },
    scrollView: {
        borderWidth: 0,
        borderColor: "transparent",
        shadowColor: 'transparent',
        flex: 1
    },
    imgContainer: {
        flexGrow: 1,
        margin: 2.5,
    },
    image: {
        maxHeight: 160,
        maxWidth: 120,
        minHeight: 160,
        minWidth: 120,
        borderRadius: 5,
        flex: 1,
        flexGrow: 1,
        borderWidth: 2,
        borderColor: "#feb47b",
        color: "#feb47b",
        overflow: "hidden",
        alignItems: "center",
        justifyContent: "center"
    },
});
