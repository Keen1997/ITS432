import React from 'react'
import { Text, View } from 'react-native'

const Ex1 = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Hello World!</Text>
        </View>
    )
}

const styles = {
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 24
    }
}

export default Ex1