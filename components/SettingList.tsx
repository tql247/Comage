import { ListItem, Icon } from 'react-native-elements'

import React, { Component } from "react";
import {Image, ScrollView, StyleSheet, View, Dimensions} from "react-native";
import {Card} from "react-native-elements";
import {Text} from "./Themed";

const {height} = Dimensions.get("window");

export class SettingList extends Component {

    state = {
        screenHeight: 0,
        settings: [
            {
                title: 'Account Setting',
                icon: 'account-circle'
            },
            {
                title: 'Saved',
                icon: 'cloud-download'
            },
        ]
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
                <View style={styles.container}>
                    {
                        this.state.settings.map((item, i) => (
                            <ListItem key={i} style={styles.card}>
                                <Icon name={item.icon} />
                                <ListItem.Content>
                                    <ListItem.Title>{item.title}</ListItem.Title>
                                </ListItem.Content>
                                <ListItem.Chevron />
                            </ListItem>
                        ))
                    }
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
        flexGrow: 1,
        borderWidth: 0,
        borderColor: "transparent",
        shadowColor: 'transparent',
        width: '100%',
        minWidth: '100%',
        margin: 0,
        padding: 0
    },
    container: {
        justifyContent: 'center',
        borderWidth: 0,
        borderColor: "transparent",
        shadowColor: 'transparent',
        width: '100%',
        minWidth: '100%',
    },
    card: {
        width: '100%',
        minWidth: '100%',
        margin: 0,
        padding: 0,
        borderWidth: 0,
        borderColor: "transparent",
        shadowColor: 'transparent',
    }
});
