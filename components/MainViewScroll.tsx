import React, { Component } from "react";
import {Image, ScrollView, StyleSheet, View, Dimensions} from "react-native";
import {Card} from "react-native-elements";
import {Text} from "./Themed";
import {TopCarousel} from "./TopCarousel";

const {height} = Dimensions.get("window");

export class MainViewScroll extends Component {

    state = {
        screenHeight: 0,
    };

    onContentSizeChange = (contentWidth: number, contentHeight: number) => {
        this.setState({ screenHeight: contentHeight });
    };

    render() {
        const scrollEnabled = this.state.screenHeight > height;

        return (
            <ScrollView
                style={{ flex: 1 }}
                contentContainerStyle={styles.scrollView}
                scrollEnabled={scrollEnabled}
                onContentSizeChange={this.onContentSizeChange}
            >
                <View style={styles.carousel}>
                    <TopCarousel/>
                </View>
                <View  style={styles.centroid}>
                    <Image
                        style={{ width: 100, height: 100 }}
                        source={require('../assets/images/logo.png')}
                    />
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    scrollView: {
        borderWidth: 0,
        borderColor: "transparent",
        shadowColor: 'transparent',
        flexGrow: 1,
    },
    centroid:{
        width: "100%",
        minWidth: "100%",
        alignItems: 'center',
        justifyContent: 'center',
    },
    carousel: {
        marginTop: 5,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
    blue: {
        backgroundColor: "blue"
    },
    red: {
        backgroundColor: "red"
    },
});
