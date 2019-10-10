import React from 'react'
import { Text, View, Image } from 'react-native'

const Menu = (props) => {
    return (
        <View style={styles.container}>
            <View>
                <Image style={styles.image} source={props.image} />
            </View>
            <View>
                <Text style={styles.title}>{props.title}</Text>
                <Text style={styles.text}>{props.text}</Text>
            </View>
        </View>
    )
}


const styles = {
    container: {
        flexDirection: 'row'
    },
    title: {
        fontSize: 18,
        marginTop: 10
    },
    text: {
        fontSize: 14
    },
    image: {
        height: 50,
        width: 50,
        marginLeft: 15,
        marginRight: 10,
        marginTop: 10
    }
}

export default Menu