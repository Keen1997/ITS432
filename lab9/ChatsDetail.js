import React from 'react';
import { StyleSheet, ScrollView, View, Text, Dimensions } from 'react-native';
import * as firebase from 'firebase';
import moment from 'moment'

let width = Dimensions.get('window').width;

export default class ChatsDetail extends React.Component {
    state = { chats: [] };

    componentWillMount() {
        firebase.database().ref('chats/').on('value', (snap) => {
            this.setState({ chats: snap.val() })
        })
    }

    renderChats() {
        let chats = [];

        if (this.state.chats) {
            Object.keys(this.state.chats).map((key, index) => {
                chats.push(
                    <View key={key} style={styles.box}>
                        <View 
                            style={{
                                flexDirection: 'row'
                            }}
                        >
                            <Text style={styles.name}>{this.state.chats[key].name}</Text>
                            <Text style={styles.time}>({moment(this.state.chats[key].time).fromNow()})</Text>
                        </View>
                        <Text style={styles.message}>{this.state.chats[key].message}</Text>
                    </View>
                )
            })
            return chats
        }
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                {this.renderChats()}
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({ 
    container: {
        backgroundColor: '#fff',
        marginTop: 160,
        width: width-40
    },
    box: {
        marginBottom: 20,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#555',
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    name: {
        marginRight: 10,
        fontWeight: 'bold'
    },
    message: {
        fontSize: 16,
        marginTop: 10
    }
})