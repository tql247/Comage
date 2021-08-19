import React, { Component } from "react";
import {
    Image,
    StyleSheet,
    View,
    Dimensions,
    FlatList,
    TouchableOpacity
} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import { ListItem, Icon } from 'react-native-elements'

interface Props {
    navigation: any
}

export class NewChapterList extends Component<Props>  {

    state = {
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
            {
                name: 'add',
                forwardScreen: '',
            },
        ]
    };


    renderImage(item: any) {
        if (item.name === "add")
            return (
                <View style={styles.image}>
                    <Icon name={"chevron-forward-circle"} size={50} type={"ionicon"} color={"#feb47b"} />
                </View>
            )
        return (
            <Image
                style={[styles.image, {backgroundColor: item.backgroundColor || "#feb47b"}]}
                resizeMode="cover"
                source={ { uri: item.coverImageURI }}
            />
        )
    }

    render() {
        return (
            <View style={styles.flatListContainer}>
                <FlatList
                    style={styles.scrollView}
                    data={this.state.users}
                    horizontal={true}
                    renderItem={({item}) => (
                        <View style={styles.imgContainer}>
                            <TouchableOpacity
                                onPress={() => (this.props.navigation.navigate("ComicDetailScreen"))}
                            >
                                {this.renderImage(item)}
                            </TouchableOpacity>
                        </View>
                    )}
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
        minHeight: 160,
        minWidth: 120,
        borderRadius: 5,
        flex: 1,
        flexGrow: 1,
        borderWidth: 2,
        borderColor: "#feb47b",
        color: "#feb47b",
        overflow: "hidden",
        alignItems: "center",
        justifyContent: "center"
    },
    name: {
        fontSize: 17,
        fontWeight: 'bold',
    },
});
