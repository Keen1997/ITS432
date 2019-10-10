import React from 'react'
import { View, Text, StyleSheet, TouchableHighlight, Dimensions, TextInput, Alert } from 'react-native'
import * as firebase from 'firebase';

let width = Dimensions.get('window').width;

export default class ListDetail extends React.Component {
    state = {
        input: ''
    }

    addList = () => {
        if (this.state.input != '') {
            firebase.database().ref('todo/').push({
                detail: this.state.input,
            });
            this.setState({ input: '' })
        } else {
            Alert.alert('Please write some detail !')
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    onChangeText={text => this.setState({ input: text })}
                    value={this.state.input}
                />
                <TouchableHighlight
                    style={styles.add_btn}
                    onPress={() => this.addList()}
                >
                    <Text style={styles.add}>+</Text>
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
        marginBottom: 40,
    },
    input: {
        borderWidth: 1,
        borderRadius: 4,
        width: 225,
        padding: 12,
        fontSize: 20,
    },
    listContainer: {
        flexDirection: 'row',
    },
    add_btn: {
        backgroundColor: '#30c75e',
        borderRadius: 48,
        alignSelf: 'center',
        paddingHorizontal: 18,
        paddingVertical: 2
    },
    add: {
        fontSize: 50,
        color: '#FFF',
    }
})