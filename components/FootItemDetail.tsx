import React, { Component } from "react";
import {Image, ScrollView, StyleSheet, View, Dimensions, FlatList, TouchableOpacity} from "react-native";
import {Text} from "./Themed";
import {Tab, TabView} from 'react-native-elements';
import { ListItem, Avatar, Icon, Button } from 'react-native-elements';
import {ChapterList} from "./ChapterList";
const {width} = Dimensions.get("window");
const randomColor = require('randomcolor');

interface Props {
}

export class FootItemDetail extends Component<Props> {

    state = {
        indexTab: 0,
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
            <View style={styles.container}>
                <Tab value={this.state.indexTab} onChange={(value) => this.setState({indexTab: value})}>
                    <Tab.Item title="chapter" />
                    <Tab.Item title="comment" />
                </Tab>

                <TabView value={this.state.indexTab} >
                    <TabView.Item style={{ }}>
                        <ChapterList />
                    </TabView.Item>
                    <TabView.Item style={{ width: '100%' }}>
                        <Text>comment</Text>
                    </TabView.Item>
                </TabView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 0,
        borderColor: "transparent",
        shadowColor: 'transparent',
    },
});
