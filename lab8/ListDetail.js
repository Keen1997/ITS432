import React from 'react'
import { View, Text, StyleSheet, TouchableHighlight, Dimensions } from 'react-native'
import firebase from 'firebase'

let width = Dimensions.get('window').width;

export default class ListDetail extends React.Component {
    done = (key) => {
        firebase.database().ref('todo/'+key).remove()
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.listContainer}>
                    <Text style={styles.index}>{this.props.index + 1}</Text>
                    <Text style={styles.detail}>{this.props.data}</Text>
                </View>
                <TouchableHighlight
                    style={styles.done_btn}
                    onPress={() => this.done(this.props.firebaseKey)}
                >
                    <Text style={styles.done}>DONE</Text>
                </TouchableHighlight>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: width,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
        paddingRight: 40,
        paddingLeft: 40,
        marginBottom: 15,
        paddingBottom: 15,
        borderBottomColor: '#dedede',
        borderBottomWidth: 1
    },
    listContainer: {
        flexDirection: 'row',
    },
    index: {
        marginRight: 14,
        fontSize: 16,
        borderRadius: 20,
        borderWidth: 1,
        alignSelf: 'center',
        padding: 8,
        paddingHorizontal: 14
    },
    detail: {   
        fontSize: 18
    },
    done_btn: {
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 16,
        paddingVertical: 5
    },
    done: {
        fontSize: 16
    }
})