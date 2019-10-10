import React from 'react'
import { Text, View } from 'react-native'

const Ex1 = () => {
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <View style={[styles.box, { backgroundColor: 'red' }]}></View>
                <View style={[styles.box, { backgroundColor: 'green' }]}></View>
            </View>
            <View>
                <View style={styles.middle}>
                    <View style={[styles.box, { backgroundColor: 'yellow' }]}></View>
                    <View style={[styles.box, { backgroundColor: 'purple' }]}></View>
                </View>
                <View style={styles.middle}>
                    <View style={[styles.box, { backgroundColor: 'gray' }]}></View>
                    <View style={[styles.box, { backgroundColor: 'black' }]}></View>
                </View>
            </View>
            <View style={styles.row}>
                <View style={[styles.box, { backgroundColor: 'blue' }]}></View>
                <View style={[styles.box, { backgroundColor: 'pink' }]}></View>
            </View>
        </View>
    )
}

const styles = {
    container: {
        flex: 1,
        justifyContent: 'space-between',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    middle: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    box: {
        width: 50,
        height: 50,
    }

}

export default Ex1