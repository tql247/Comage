import React, { Component } from "react";
import {StyleSheet, View} from "react-native";
import {Text} from "./Themed";

const randomColor = require('randomcolor');

export class ListTag extends Component {
    state = {
        tags: [
            "Completed", "Latest", "Newest", "Top view",
            "Action", "Adult", "Adventure", "Comedy",
            "Cooking", "Doujinshi", "Drama", "Ecchi",
            "Fantasy", "Gender bender", "Harem", "Historical",
            "Horror", "Isekai", "Josei", "Manhua", "Manhwa", "Martial arts",
            "Mature", "Mecha", "Medical", "Mystery", "One shot", "Psychological",
            "Romance", "School life", "Sci fi", "Seinen", "Shoujo", "Shoujo ai",
            "Shounen", "Shounen ai", "Slice of life", "Smut", "Sports",
            "Supernatural", "Tragedy", "Webtoons", "Yaoi", "Yuri"
        ]
    }

    render() {

        return (
            <View style={[{flex: 1, height: "100%", flexDirection: "row", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between"}]}>
                {this.state.tags.map((item) => (
                    <Text style={ [styles.tag, { color: randomColor()}]}>#{item}</Text>
                ))}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    tag: {
        paddingVertical: 1,
        paddingHorizontal: 3,
        backgroundColor: "#fefefe",
        marginRight: 1,
        marginBottom: 1,
        flexGrow: 1,
        textAlign: "center"
    }
});
