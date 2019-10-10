import React from 'react'
import { View } from 'react-native'

export default class Test3 extends React.Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: "space-between"
                }}
            >
                <View
                    style= {{
                        // flexDirection: 'row',
                        justifyContent: "space-between"
                    }}
                >
                    <View style={styles.box}></View>
                    <View style={[styles.box, { backgroundColor: '#e5b0ea' }]}></View>
                </View>
                <View
                    style= {{
                        // flexDirection: 'row',
                        justifyContent: "space-between"
                    }}
                >
                    <View style={[styles.box, { backgroundColor: '#eccd8f' }]}></View>
                    <View style={[styles.box, { backgroundColor: '#b2e4d5' }]}></View>
                </View>
            </View>
        )
    }
}

styles = {
    box: {
        width: 50,
        height: 50,
        backgroundColor: "#5c94bd"
    }
}