import * as React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

export default function GradientHeaderTitle() {
    return (
        <Image
            style={{ width: '110%', height: 65, margin: -20, marginTop: -22}}
            source={require('../assets/images/header.png')}
        />
    );
}
