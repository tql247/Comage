import React, { Component } from "react";
import {Image, ScrollView, StyleSheet, View, Dimensions, FlatList, TouchableOpacity} from "react-native";
import {Text} from "./Themed";

import { ListItem, Avatar, Icon, Button } from 'react-native-elements';
import {ChapterList} from "./ChapterList";
import {FootItemDetail} from "./FootItemDetail";
const {width} = Dimensions.get("window");
const randomColor = require('randomcolor');

interface Props {
    navigation: any
}

export class DetailItem extends Component<Props> {

    state = {
        item: {
            title: 'The Reincarnated Inferior Magic Swordsman',
            alternative : 'Rettou Hito no Maken Tsukai Sukiruboudo o Kushi Shite Saikyou ni Itaru',
            description: 'A male engineer transmigrated into another world, and became a prince. This place strikingly resembles the Middle Ages of Europe, but at the same time, it seems kind of different? Witches truly exists, and they even possess magic powers! Magic powers are productive forces! Save the witches, liberate the productive forces! Open map, fight demons, break conspiracies, climb up the science and technology tree, and open the path of hardcore ‘farming’!',
            author: "Hagiu Aki - Kanou Hiroto",
            imageCover: 'https://avt.mkklcdnv6temp.com/3/t/22-1598420567.jpg',
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
    };



    render() {
        return (
            <FlatList
                data={[1]}
                numColumns={1}
                renderItem={({item}) => (
                    <View>
                        <View style={styles.container}>
                            <View style={styles.header}>
                                <Text style={styles.title}>
                                    {this.state.item.title}
                                </Text>
                                <Text style={styles.alternative }>
                                    Alternative: {this.state.item.alternative}
                                </Text>
                                <Text style={styles.author}>
                                    Author(s): {this.state.item.author}
                                </Text>
                                <View style={styles.separator}></View>
                                <View style={styles.tagContainer}>
                                    {this.state.item.tag.map((item, index) => {
                                        return (
                                            <Text style={styles.tag}>#{item}</Text>
                                        )
                                    })}
                                </View>
                            </View>

                            <Image
                                style={styles.image}
                                resizeMode="cover"
                                source={{ uri: this.state.item.imageCover }}
                            />
                        </View>
                        <View>
                            <Text style={styles.description}>
                                {this.state.item.description}
                            </Text>
                        </View>
                        <View style={styles.socialDOM}>
                            <View style={styles.follower}>
                                <Icon size={25} color={"#E7525B"} name={"heart-outline"} type={"ionicon"} />
                                <Text style={{margin: 5, color: "#666666"}}>20</Text>
                            </View>
                            <View style={styles.rating}>
                                <Icon size={25} color={"#f1c76a"} name={"staro"} type={"antdesign"} />
                                <Text style={{margin: 5, color: "#666666"}}>4.5/5</Text>
                            </View>
                            <View style={styles.viewer}>
                                <Icon size={25} color={"#d0b8da"} name={"eye-outline"} type={"ionicon"} />
                                <Text style={{margin: 5, color: "#666666"}}>2011</Text>
                            </View>
                            {/*<View style={styles.commenter}>*/}
                            {/*    <Icon size={25} color={"#00b488"} name={"comment-multiple-outline"} type={"material-community"} />*/}
                            {/*    <Text style={{margin: 5, color: "#666666"}}>2000</Text>*/}
                            {/*</View>*/}
                            <View style={styles.share}>
                                <Icon size={25} color={"#3b5998"} name={"share-outline"} type={"ionicon"} />
                                <Text style={{margin: 5, color: "#666666"}}>312</Text>
                            </View>
                        </View>
                        <View >
                            <FootItemDetail  {...this.props} navigation={this.props.navigation} />
                        </View>
                    </View>
                ) }
            />
        );
    }
}

const styles = StyleSheet.create({
    columnContainer: {
        flex: 1,
    },
    container: {
        borderWidth: 0,
        borderColor: "transparent",
        shadowColor: 'transparent',
        flexDirection: "row"
    },
    image: {
        height: "auto",
        width: width/3,
        overflow: "hidden",
        borderRadius: 5,
        margin: 10,
    },
    header: {
        flex: 1,
        margin: 10,
    },
    title: {
        color: "#666666",
        fontSize: 24,
        fontWeight: "500",
        marginBottom: 5,
    },
    author: {
        color: "#A3A3A3",
        fontSize: 15,
        fontWeight: "300",
    },
    alternative: {
        color: "#A3A3A3",
        fontSize: 15,
        fontWeight: "300",
    },
    separator: {
        marginVertical: 10,
        height: 1,
        width: '80%',
    },
    tagContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
    },
    tag: {
        fontSize: 13,
        backgroundColor: "#F5F5F5",
        borderRadius: 1,
        paddingHorizontal: 5,
        margin: 0.5,
        color: "#373937"
    },
    description: {
        color: "#666666",
        fontSize: 15,
        margin: 10,
    },
    socialDOM: {
        color: "#666666",
        fontSize: 15,
        marginVertical: 15,
        marginHorizontal: 10,
        justifyContent: "space-around",
        flexDirection: "row",
    },
    follower: {
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row"
    },
    rating: {
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row"
    },
    viewer: {
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row"
    },
    commenter: {
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row"
    },
    share: {
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row"
    },
});
