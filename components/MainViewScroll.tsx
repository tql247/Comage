import React, { Component } from "react";
import {Image, ScrollView, StyleSheet, View, Dimensions, FlatList} from "react-native";
import {Card} from "react-native-elements";
import {Text} from "./Themed";
import {TopCarousel} from "./TopCarousel";

const {height} = Dimensions.get("window");

export class MainViewScroll extends Component {

    render() {

        return (
            <FlatList
                data={[1]}
                renderItem={({item}) => (
                    <View style={[{flex: 1, height: "100%"}]}>
                        <View style={styles.carousel}>
                            <TopCarousel/>
                        </View>
                        <View  style={styles.centroid}>
                            <Image
                                style={{ width: 100, height: 100 }}
                                source={require('../assets/images/logo.png')}
                            />
                        </View>
                    </View>
                ) }
            />
        );
    }
}

const styles = StyleSheet.create({
    scrollView: {
        borderWidth: 0,
        borderColor: "transparent",
        shadowColor: 'transparent',
        flex: 1,
        flexGrow: 1,
        height: "100%",
        minHeight: height,
    },
    centroid:{
        width: "100%",
        minWidth: "100%",
        alignItems: 'center',
        justifyContent: 'center',
    },
    carousel: {
        flex: 1,
        marginTop: 5,
        flexGrow: 1,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    blue: {
        backgroundColor: "blue"
    },
    red: {
        backgroundColor: "red"
    },
});
