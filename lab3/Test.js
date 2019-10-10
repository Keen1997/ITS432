import React, { Component } from 'react';
import { View, StyleSheet, Button, Alert } from 'react-native';

export default class Test extends Component {
    render() {
        return (
            <View>
                <View style={[styles.container, { flexWrap: 'nowrap' }]}>
                    <View style={styles.item1}></View>
                    <View style={styles.item2}></View>
                    <View style={styles.item3}></View>
                    <View style={styles.item1}></View>
                    <View style={styles.item2}></View>
                    <View style={styles.item3}></View>
                    <View style={styles.item1}></View>
                    <View style={styles.item2}></View>
                    <View style={styles.item3}></View>
                </View>
                <View style={{ height: 50 }} />
                <View style={[styles.container, { flexWrap: 'wrap' }]}>
                    <View style={styles.item1}></View>
                    <View style={styles.item2}></View>
                    <View style={styles.item3}></View>
                    <View style={styles.item1}></View>
                    <View style={styles.item2}></View>
                    <View style={styles.item3}></View>
                    <View style={styles.item1}></View>
                    <View style={styles.item2}></View>
                    <View style={styles.item3}></View>
                </View>
                <Button
                    onPress={() => {
                        Alert.alert('You tapped the button!');
                    }}
                    title="Press Me"
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 5, height: 100,
        flexDirection: 'row',
        borderColor: 'black', borderWidth: 1
    },
    item1: { width: 50, height: 50, backgroundColor: 'red' },
    item2: { width: 50, height: 50, backgroundColor: 'blue' },
    item3: { width: 50, height: 50, backgroundColor: 'green' }
});
