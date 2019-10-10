import React from 'react'
import { View, Text } from 'react-native'

import Menu from './Menu'

class Ex3 extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Menu image={require('./home.png')} title='My Menu' text='my first menu' />
                <Menu image={require('./home.png')} title='Somethings' text='my text' />
                <Menu image={require('./home.png')} title='Hi' text='hello' />
            </View>
        )
    }
}


const styles = {
    container: {
        flex: 1,
        paddingTop: 35
    },
}

export default Ex3