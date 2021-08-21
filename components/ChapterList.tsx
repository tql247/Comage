import React, { Component } from "react";
import {Image, ScrollView, StyleSheet, View, Dimensions, FlatList, TouchableOpacity} from "react-native";
import {Text} from "./Themed";


const {height, width} = Dimensions.get("window");
const numColumn = Math.floor(width/100) - 1;
console.log('numColumn')
console.log(width)
console.log(numColumn)

interface Props {
    navigation: any
}

export class ChapterList extends Component<Props> {

    state = {
        screenHeight: 0,
        item: [
            {
                chapIndexer: '31',
                chapName: 'Parallel Thinking191',
                updatedAt: "Mar 19,21",
            },
            {
                chapIndexer: '30',
                chapName: 'After The Battle177',
                updatedAt: "Mar 13,21",
            },
            {
                chapIndexer: '29',
                chapName: 'Annihilation179',
                updatedAt: "Mar 04,21",
            },
            {
                chapIndexer: '29',
                chapName: 'Annihilation179',
                updatedAt: "Mar 04,21",
            },
            {
                chapIndexer: '28',
                chapName: 'Queen180',
                updatedAt: "Feb 24,21",
            },
            {
                chapIndexer: '27',
                chapName: 'Rockworms, Again206',
                updatedAt: "Feb 04,21",
            },
            {
                chapIndexer: '26',
                chapName: 'Predicament189',
                updatedAt: "Jan 29,21",
            },
            {
                chapIndexer: '25',
                chapName: 'Pursuing Esther',
                updatedAt: "Jan 22,21",
            },
            {
                chapIndexer: '24',
                chapName: 'The Disappearance Of Esther200',
                updatedAt: "Jan 07,21",
            },
            {
                chapIndexer: '23',
                chapName: 'The Disappearance Of Esther200',
                updatedAt: "Jan 07,21",
            },
            {
                chapIndexer: '23',
                chapName: 'Esther\'s Invitation',
                updatedAt: "Dec 31,20",
            },
            {
                chapIndexer: '22',
                chapName: 'Purchasing Magic159',
                updatedAt: "Dec 24,20",
            },
            {
                chapIndexer: '21',
                chapName: 'Lily’S Magic Bookstore155',
                updatedAt: "Dec 14,20",
            },
            {
                chapIndexer: '20',
                chapName: 'Rank Up170',
                updatedAt: "Dec 03,20",
            },
            {
                chapIndexer: '19',
                chapName: 'Encounter With Monsters186',
                updatedAt: "Nov 26,20",
            },
            {
                chapIndexer: '18',
                chapName: 'The First Request178',
                updatedAt: "Nov 19,20",
            },
            {
                chapIndexer: '17',
                chapName: 'End Of The Long Day',
                updatedAt: "Nov 12,20",
            },
            {
                chapIndexer: '16',
                chapName: 'Marie Motive183',
                updatedAt: "Nov 10,20",
            },
            {
                chapIndexer: '15',
                chapName: 'Test Result',
                updatedAt: "Nov 09,20",
            },
            {
                chapIndexer: '14',
                chapName: 'Secrets Of Lost Person',
                updatedAt: "Nov 08,20",
            },
            {
                chapIndexer: '13',
                chapName: 'Graff The Trainer',
                updatedAt: "Nov 07,20",
            },
            {
                chapIndexer: '12',
                chapName: 'Aptitude Test',
                updatedAt: "Nov 07,20",
            },
            {
                chapIndexer: '11',
                chapName: 'Philip The Chief',
                updatedAt: "Nov 06,20",
            },
            {
                chapIndexer: '10',
                chapName: 'Let\'s Go To The Adventurers Guild!',
                updatedAt: "Oct 31,20",
            },
            {
                chapIndexer: '9',
                chapName: 'The City Of Finris',
                updatedAt: "Oct 29,20",
            },
            {
                chapIndexer: '8',
                chapName: 'Adventurer\'s Profession186',
                updatedAt: "Oct 29,20",
            },
            {
                chapIndexer: '7',
                chapName: 'A Bloody Encounter',
                updatedAt: "Oct 29,20",
            },
            {
                chapIndexer: '6',
                chapName: 'Goblin Subjugation 2',
                updatedAt: "Oct 29,20",
            },
            {
                chapIndexer: '5',
                chapName: 'Goblin Subjugation',
                updatedAt: "Oct 29,20",
            },
            {
                chapIndexer: '4',
                chapName: 'Three Suspicious Persons',
                updatedAt: "Oct 29,20",
            },
            {
                chapIndexer: '3',
                chapName: 'The Nameless Town',
                updatedAt: "Oct 29,20",
            },
            {
                chapIndexer: '2',
                chapName: 'Skill Points',
                updatedAt: "Oct 29,20",
            },
            {
                chapIndexer: '1',
                chapName: 'Eargard And The Board Of Skills',
                updatedAt: "Aug 26,20",
            },
        ]
    };

    render() {
        return (
            <View style={{ margin: 10, flex: 1}}>
                {this.state.item.map((item) => (
                    <View style={styles.chapterContainer}>
                        <TouchableOpacity
                            onPress={() => (this.props.navigation.navigate("ReadingScreen"))}
                        >
                            <Text style={styles.chapterContainer}>
                                Chapter {item.chapIndexer}: {item.chapName} - <Text style={{color: "#666666", fontStyle: "italic"}}>{item.updatedAt}</Text>
                            </Text>
                        </TouchableOpacity>
                    </View>
                ))}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    FlatList: {
        backgroundColor: "red",
        margin: 10,
        borderWidth: 0,
    },
    chapterContainer: {
        flex: 1,
        flexWrap: "wrap",
        fontSize: 15,
        paddingVertical: 3
    },
});
