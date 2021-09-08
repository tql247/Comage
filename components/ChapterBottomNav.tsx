import React, { Component } from "react";
import {Image, ScrollView, StyleSheet, View, Dimensions, FlatList, TouchableOpacity} from "react-native";
import {Text} from "./Themed";
import {APIConfig} from "../config";
import {Icon} from "react-native-elements";

const {height, width} = Dimensions.get("window");
const imageWidth = width - 5;

interface Props {
    chapterId: any;
    mangaProviderId: any;
    setChapter: any;
}

export class ChapterBottomNav extends Component<Props> {
    state = {
        nextChapter: undefined
    }

    getNextChapter() {
        const axios = require('axios');
        const url = APIConfig['api']['get_next_chapter']
            .replace("{chapterId}", this.props.chapterId)
            .replace("{mangaProviderId}", this.props.mangaProviderId);

        const config = {
            method: 'get',
            url: url,
            headers: {}
        };

        const _this = this;

        try {
            axios(config)
                .then(function (response: any) {
                    const nextChapter = response.data.chapter[0];
                    _this.setState({
                        nextChapter: {
                            chapterId: nextChapter.id,
                            chapterName: nextChapter.chapter_name,
                            updatedAt: nextChapter.updated_at || nextChapter.created_at
                        }
                    })
                    console.log('_this.state.nextChapter')
                    console.log(_this.state.nextChapter)
                })
                .catch(function (error: any) {
                    console.log(error);
                });

        } catch (e) {
        }
    }

    _onclickNextChapter = () => {
        this.props.setChapter(this.state.nextChapter);
    }

    componentDidMount() {
        this.getNextChapter();
    }

    render() {
        return (
            <View style={[styles.fabContainer]}>
                <View style={[styles.fab]}>
                    <View style={styles.fabItem}>
                        <Icon size={27} color={"#666666"} name={"arrow-back"} type={"ionicon"} />
                    </View>
                    <View style={styles.fabItem}>
                        <Icon
                            onPress={this._onclickNextChapter}
                            disabled={!this.state.nextChapter}
                            disabledStyle={{backgroundColor: 'transparent'}}
                            size={27}
                            color={this.state.nextChapter?"#666666":"rgba(102,102,102,0.25)"}
                            name={"arrow-forward"}
                            type={"ionicon"} />
                    </View>
                    <View style={styles.fabItem}>
                        <Icon size={27} color={"#666666"} name={"comment-outline"} type={"material-community"} />
                        <Text style={styles.fabItemText}>30</Text>
                    </View>
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    fabContainer: {
        paddingVertical: 7,
        alignItems: "center",
        position: 'absolute',
        left: 0,
        bottom: 0,
        color: "#666666",
        zIndex: 1000,
        width: "100%",
        backgroundColor: "white",
    },
    fab: {
        justifyContent: "space-around",
        flexDirection: "row",
        width: "100%",
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
