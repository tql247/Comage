import React, { Component } from "react";
import {Image, ScrollView, StyleSheet, View, Dimensions, FlatList} from "react-native";
import {Text} from "./Themed";


const {height, width} = Dimensions.get("window");
const numColumn = Math.floor(width/100) - 1;
console.log('numColumn')
console.log(width)
console.log(numColumn)

export class NewChapterList extends Component {

    state = {
        screenHeight: 0,
        users: [
            {
                name: '文学之祖 体裁',
                coverImageURI: 'https://www.kindpng.com/picc/m/236-2362818_anime-sempai-animegirl-heart-kawaii-cute-anime-girl.png'
            },
            {
                name: 'Siren Roar Mir Kola',
                coverImageURI: 'https://i.imgur.com/wDlae3z.jpg'
            },
            {
                name: 'У меня',
                coverImageURI: 'https://i.imgur.com/zNZmemg.jpg'
            },
            {
                name: 'Maus geht kape gacha',
                coverImageURI: 'https://i.imgur.com/ti9Nf0R.jpg'
            },
            {
                name: 'Il a dit con olp',
                coverImageURI: 'https://i.imgur.com/ZvFehmB.jpg'
            },
            {
                name: '不要搅扰水。',
                coverImageURI: 'https://i.imgur.com/esC9VjO.jpg'
            },
            {
                name: ' ヘビの首を噛',
                coverImageURI: 'https://i.pinimg.com/564x/26/39/f8/2639f821a36e609ce197af6326928fdc.jpg'
            },
            {
                name: ' ヘビの首を噛',
                coverImageURI: 'https://i.pinimg.com/564x/46/4b/7d/464b7d1b62a5f0f106bb41ca28f59fa0.jpg'
            },
            {
                name: ' ヘビの首を噛',
                coverImageURI: 'https://i.pinimg.com/564x/01/5d/91/015d9121be5a1ce828d2acc40680f0fc.jpg'
            },
        ]
    };

    onContentSizeChange = (contentWidth: number, contentHeight: number) => {
        this.setState({ screenHeight: contentHeight });
    };


    render() {
        const scrollEnabled = this.state.screenHeight > height;

        return (
            <View style={styles.flatListContainer}>
                <FlatList
                    style={styles.scrollView}
                    data={this.state.users}
                    horizontal={true}
                    renderItem={({item}) => (
                        <View style={styles.imgContainer}>
                            <Image
                                style={styles.image}
                                resizeMode="cover"
                                source={{ uri: item.coverImageURI }}
                            />
                        </View>
                    ) }
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
    imgContainer: {
        flexGrow: 1,
        margin: 2.5,
    },
    image: {
        maxHeight: 250,
        maxWidth: 200,
        minHeight: 150,
        minWidth: 100,
        borderRadius: 5,
        flex: 1,
        flexGrow: 1,
        borderWidth: 2,
        borderColor: "#feb47b",
        backgroundColor: "#feb47b",
        overflow: "hidden",
    },
    name: {
        fontSize: 17,
        fontWeight: 'bold',
    },
});
