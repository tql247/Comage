import * as React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
// @ts-ignore
import GradientHeader from 'react-native-gradient-header';

export default function GradientHeaderTitle() {
    return (
        <GradientHeader
            subtitle="Have a nice day Kuray"
            gradientColors={["#00416A", "#E4E5E6"]}
        />
    );
}
