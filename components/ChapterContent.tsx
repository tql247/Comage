import React, { Component } from "react";
import {Image, ScrollView, StyleSheet, View, Dimensions, FlatList, TouchableOpacity} from "react-native";
import {Text} from "./Themed";

const {height, width} = Dimensions.get("window");
const imageWidth = width - 5;

export class ChapterContent extends Component {

    state = {
        index: 0,
        screenHeight: 0,
        item: [
            {
                indexer: '1',
                imageURI: 'https://i.imgur.com/upR8yZY.jpg',
                width: 0,
                height: 0,
            },
            {
                indexer: '2',
                imageURI: 'https://i.imgur.com/N216PDc.jpg',
                width: 0,
                height: 0,
            },
            {
                indexer: '3',
                imageURI: 'https://i.imgur.com/anvV0da.jpg',
                width: 0,
                height: 0,
            },
            {
                indexer: '4',
                imageURI: 'https://i.imgur.com/y94XNq3.jpg',
                width: 0,
                height: 0,
            },
            {
                indexer: '5',
                imageURI: 'https://i.imgur.com/ngSrPrL.jpg',
                width: 0,
                height: 0,
            },
            {
                indexer: '6',
                imageURI: 'https://i.imgur.com/3MzLXWU.jpg',
                width: 0,
                height: 0,
            },
            {
                indexer: '7',
                imageURI: 'https://i.imgur.com/ookQTQP.jpg',
                width: 0,
                height: 0,
            },
            {
                indexer: '8',
                imageURI: 'https://i.imgur.com/qLJEVGn.jpg',
                width: 0,
                height: 0,
            },
            {
                indexer: '9',
                imageURI: 'https://i.imgur.com/rKeYKFa.jpg',
                width: 0,
                height: 0,
            },
            {
                indexer: '10',
                imageURI: 'https://i.imgur.com/j4OZiwF.jpg',
                width: 0,
                height: 0,
            },
            {
                indexer: '11',
                imageURI: 'https://i.imgur.com/5KrhTSX.jpg',
                width: 0,
                height: 0,
            },
            {
                indexer: '12',
                imageURI: 'https://i.imgur.com/VGfflZa.jpg',
                width: 0,
                height: 0,
            },
            {
                indexer: '13',
                imageURI: 'https://i.imgur.com/kFcPxop.jpg',
                width: 0,
                height: 0,
            },
        ]
    };


    componentDidMount() {
        // resize image to fit screen
        this.state.item.map((item, idx: number) => {
            Image.getSize(item.imageURI, (width, height) => {
                this.state.item[idx].width = width;
                this.state.item[idx].height = height;
                this.setState({item: this.state.item})
            })
        })
    }

    render() {

        return (
            <View>
                {this.state.item.map((item) => (
                    <View style={styles.container}>
                        <Image
                            style={[styles.image, {height: imageWidth*item.height/item.width}]}
                            resizeMode="cover"
                            source={{ uri: item.imageURI }}
                        />
                    </View>
                ))}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center"
    },
    image: {
        paddingHorizontal: 10,
        height: "auto",
        width: imageWidth,
        overflow: "hidden",
    },
});
