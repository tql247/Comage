import React, { Component } from "react";
import {Image, ScrollView, StyleSheet, View, Dimensions, FlatList, TouchableOpacity} from "react-native";
import {Text} from "./Themed";

import { ListItem, Avatar, Icon, Button } from 'react-native-elements';
const {width} = Dimensions.get("window");
const randomColor = require('randomcolor');

interface Props {
    navigation: any
}

export class ItemListing extends Component<Props> {

    state = {
        screenHeight: 0,
        test: false,
        users: [
            {
                title: 'Release That Witch',
                subtitle: 'A male engineer transmigrated into another world, and became a prince. This place strikingly resembles the Middle Ages of Europe, but at the same time, it seems kind of different? Witches truly exists, and they even possess magic powers! Magic powers are productive forces! Save the witches, liberate the productive forces! Open map, fight demons, break conspiracies, climb up the science and technology tree, and open the path of hardcore ‘farming’!',
                imageCover: 'https://avt.mkklcdnv6temp.com/47/i/17-1583496971.jpg',
                lastUpdate: "Aug 18,2021 - 21:30 PM",
                isFollowing: false,
                tag: [
                    "Action",
                    "Adventure",
                    "Fantasy",
                    "Shounen",
                    "Webtoons"
                ]
            },
            {
                title: 'Isekai Yurutto Survival Seikatsu: Gakkou no Minna to Isekai no Mujintou ni Tenishitakedo Ore Dake Rakushou desu',
                subtitle: 'I’m Shinomiya Hokage, a 3rd-year high-school boy who dreams of a survival life. One day, everyone in my school transferred to a mysterious island in a parallel world. I woke up in an unknown cave and I started moving on my own. Then, I met up with some of my classmates. My knowledge and tools in survival shines through. I was a plain guy in school but I’m the leader in this world.',
                imageCover: 'https://avt.mkklcdnv6temp.com/41/a/22-1606497907.jpg',
                lastUpdate: "Aug 19,2021 - 12:54 AM",
                isFollowing: true,
                tag: [
                    "Action", "Adventure", "Comedy", "Drama", "Fantasy", "Harem" ,"Psychological" , "Romance"
                ]
            },
            {
                title: 'Soredemo Ayumu wa Yosetekuru',
                subtitle: 'Soredemo Ayumu wa Yosetekuru summary is updating. Come visit MangaNato.com sometime to read the latest chapter of Soredemo Ayumu wa Yosetekuru. If you have any question about this manga, Please don\'t hesitate to contact us or translate team. Hope you enjoy it.',
                imageCover: 'https://avt.mkklcdnv6temp.com/3/j/18-1583497210.jpg',
                lastUpdate: "Aug 18,2021 - 15:32 AM",
                isFollowing: false,
                tag: [
                    "Comedy", "Romance", "School life", "Shounen", "Slice of life",
                ]
            },
            {
                title: 'Ichioku-Nen Button O Renda Shita Ore Wa, Kizuitara Saikyou Ni Natteita',
                subtitle: 'Allen is a boy who is despised as a failed swordsman. One day, desperate for a duel with an elite swordsman who bets on leaving Kenjutsu Academy, a mysterious hermit asks him if he will press the "100 million year button". Can the mysterious object really help him train for 100 million years?',
                imageCover: 'https://avt.mkklcdnv6temp.com/12/a/21-1589272261.jpg',
                lastUpdate: "Aug 19,2021 - 16:54 PM",
                isFollowing: false,
                tag: [
                    "Action", "Adventure", "Comedy", "Drama" , "Fantasy" , "Harem" , "Romance" , "Shounen", "Manhua"
                ]
            },
            {
                title: 'Martial Peak',
                subtitle: 'The journey to the martial peak is a lonely, solitary and long one.In the face of adversity,you must survive and remain unyielding.Only then can you break through and and continue on your journey to become the strongest. Sky Tower tests its disciples in the harshest ways to prepare them for this journey.One day the lowly sweeper Yang Kai managed to obtain a black book, setting him on the road to the peak of the martials world.',
                imageCover: 'https://avt.mkklcdnv6temp.com/20/b/16-1583494192.jpg',
                lastUpdate: "Aug 19,2021 - 02:24 AM",
                isFollowing: false,
                tag: [
                    "Action" , "Adventure" , "Fantasy" , "Historical" , "Martial arts"
                ]
            },
            {
                title: 'Urara Meirochou',
                subtitle: 'Meiro-chou is a town where all-female diviners (uranaishi) live and where girls from all over the country yearn to become the top diviner — Urara. Today, a solitary girl named Chiya enters the town\'s gates. However, she has another purpose coming here, besides becoming the Urara. Chiya\'s days as an apprentice diviner begin as she meets three friends — the earnest Kon, Koume who is a fan of Western culture, and the shy Nono.',
                imageCover: 'https://avt.mkklcdnv6temp.com/10/e/15-1583491828.jpg',
                lastUpdate: "Aug 19,2021 - 01:26 AM",
                isFollowing: false,
                tag: [
                    "Action" ,"Adventure", "Fantasy", "Historical" ,"Martial arts"
                ]
            },
            {
                title: 'The Reincarnated Inferior Magic Swordsman',
                subtitle: 'Inferior Magic Swordsman ; Rettou Hito no Maken Tsukai Sukiruboudo o Kushi Shite Saikyou ni Itaru ; Use the Skill Board to Become the Most Powerful Swordsman ; 劣等人の魔剣使い　スキルボードを駆使して最強に至る',
                imageCover: 'https://avt.mkklcdnv6temp.com/3/t/22-1598420567.jpg',
                lastUpdate: "Aug-18-2021 23:25:20 PM",
                isFollowing: false,
                tag: [
                    "Adventure", "Fantasy", "Shounen",
                ]
            },
            {
                title: 'Daiya No A - Act Ii',
                subtitle: 'A normal office worker, Toru Minasuki, was swallowed up by a dimensional fissure and reincarnated into a different world. Upon reincarnation, Toru was given a [skill board] by God. Make the most of it to acquire all the necessary skills! Even though he is an "inferior person," he\'ll make his way to the top!',
                imageCover: 'https://avt.mkklcdnv6temp.com/50/k/13-1583489698.jpg',
                lastUpdate: "Aug 19,2021 - 16:54 PM",
                isFollowing: false,
                tag: [
                    "Comedy" ,"School life", "Shounen", "Sports"
                ]
            },
            {
                title: 'Ranger Reject',
                subtitle: 'Thirteen years ago, suddenly the Villainous Army of evil appeared in their gigantic floating castle 10000 meters in the sky to invade Earth! The villainous army have reviving capabilities that make them immortal, making them a serious threat to humanity. To protect us against these invaders, the Divine Dragon Rangers, the Dragon Keepers, wield their miraculous powers and their weapons, Divine Tools, and continuously fight for our safety! The assault of the Villainous Army! The vigilance of the Dragon Keepers! Will they succeed in their conquest…? Find out in the action-packed superhero series of a lifetime!',
                imageCover: 'https://avt.mkklcdnv6temp.com/26/h/23-1613533484.jpg',
                lastUpdate: "Aug 19,2021 - 01:26 AM",
                isFollowing: false,
                tag: [
                    "Action", "Adventure" ,"Comedy", "Mystery" , "Sci fi", "Shounen" , "Supernatural"
                ]
            },
            {
                title: 'Blue Period',
                subtitle: 'In his second to last year of high school, the dispassionate but studious, Yataro Yaguchi finally finds a calling in art. With no prior art experience, he decides to work towards to applying to an art university. A decision with potentially disastrous results.',
                imageCover: 'https://avt.mkklcdnv6temp.com/45/s/17-1583496913.jpg',
                lastUpdate: "Aug 19,2021 - 01:26 AM",
                isFollowing: false,
                tag: [
                    "Drama" , "School life" , "Seinen"
                ]
            },
        ]
    };


    updateTest = (test: boolean) => {
        this.setState({ test });
        console.log(this.state.test)
    };

    render() {
        const { test } = this.state;

        return (
            <View style={styles.flatListContainer}>
                <FlatList
                    extraData={this.state}
                    style={styles.scrollView}
                    data={this.state.users}
                    renderItem={({item}) => (
                        // <ListItem.Swipeable
                        //     rightContent={
                        //         <View style={styles.swipeIcon}>
                        //             <Icon onPress={() => (this.updateTest(!test))} name={test?"heart":"heart-outline"} size={30} type={"ionicon"} color={"#feb47b"} />
                        //         </View>
                        //     }
                        // >
                            <View style={styles.itemContainer}>
                                <TouchableOpacity
                                    onPress={() => (this.props.navigation.navigate("ComicDetailScreen"))}
                                >
                                <Image
                                    style={styles.image}
                                    resizeMode="cover"
                                    source={{ uri: item.imageCover }}
                                />
                                </TouchableOpacity>
                                <View style={styles.content}>
                                    <TouchableOpacity
                                        onPress={() => (this.props.navigation.navigate("ComicDetailScreen"))}
                                    >
                                        <Text style={styles.title}>{item.title}</Text>
                                    </TouchableOpacity>
                                    <Text style={styles.info}>Last update {item.lastUpdate}</Text>
                                    <Text style={styles.subtitle}>{item.subtitle}</Text>
                                    <View style={styles.separator}></View>
                                    <View style={styles.tagContainer}>
                                        {item.tag.map((item, index) => {
                                            return (
                                                <Text style={ { color: randomColor()}}>#{item}</Text>
                                            )
                                        })}
                                    </View>
                                </View>
                            </View>
                        // </ListItem.Swipeable>
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
    scrollView: {
        borderWidth: 0,
        borderColor: "transparent",
        shadowColor: 'transparent',
        flex: 1
    },
    swipeIcon: {
        height: "100%",
        minHeight: "100%",
        flex: 1,
        flexGrow: 1,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center"
    },
    listContainer: {
        width: '100%',
        minWidth: '100%',
        margin: 0,
        padding: 0,
        borderWidth: 0,
        borderColor: "transparent",
        shadowColor: 'transparent',
        flexGrow: 1,
    },
    itemContainer: {
        flexDirection: "row",
        width: '100%',
        minWidth: '100%',
        backgroundColor: "white",
        marginBottom: 1,
        padding: 10,
        paddingBottom: 20
    },
    image: {
        height: width/3,
        width: width/4,
        overflow: "hidden",
        borderRadius: 5,
        marginRight: 10
    },
    content: {
        marginLeft: 10,
        flex: 1
    },
    tagContainer: {
        flexDirection: "row",
        flexWrap: "wrap"
    },
    tag: {
        fontSize: 15,
    },
    subtitle: {
        fontSize: 15,
        fontWeight: '300',
    },
    info: {
        fontSize: 13,
        fontStyle: "italic",
        color: "#ccc",
        marginBottom: 7
    },
    title: {
        fontSize: 17,
        fontWeight: '500',
        color: "#565656"
    },
    separator: {
        marginVertical: 10,
        height: 1,
        width: '80%',
    },
});
