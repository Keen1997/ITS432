import React from 'react'
import { StyleSheet, View, Text, TextInput, TouchableHighlight, Alert, Dimensions } from 'react-native';
import * as firebase from 'firebase';
import ChatsDetail from './ChatsDetail';

let width = Dimensions.get('window').width;

export default class ChatScreen extends React.Component {
    state = {
        haveName: false,
        name: '',
        chat: ''
    }

    componentWillMount() {
        firebase.database().ref('users/' + this.props.user.uid).on('value', (snap) => {
            if (snap.val()) {
                this.setState({
                    haveName: true,
                    name: snap.val().name
                })
            } else {
                this.setState({ haveName: false })
            }
        })
    }

    logout() {
        firebase.auth().signOut().then(() => {
            Alert.alert("You're already logout.")
        }).catch((error) => {
            Alert.alert(error.message)
        })
    }

    setName() {
        if (this.state.name != '') {
            let uid = this.props.user.uid

            firebase.database().ref('users/' + uid).set({
                'name': this.state.name
            })
        } else {
            Alert.alert('please enter your name')
        }

    }

    sendChat() {
        firebase.database().ref('chats/').push({
            'uid': this.props.user.uid,
            'name': this.state.name,
            'message': this.state.chat,
            'time': Date.now()
        }).then(() => {
            this.setState({ chat: '' })
        })
    }

    renderContent() {
        if (!this.state.haveName) {
            return (
                <View>
                    <Text style={styles.enterNameText}>Enter your name: </Text>
                    <TextInput
                        style={styles.input}
                        value={this.state.name}
                        onChangeText={name => this.setState({ name })}
                    />
                    <TouchableHighlight
                        style={styles.button}
                        onPress={() => this.setName()}
                    >
                        <Text style={styles.textButton}>OK</Text>
                    </TouchableHighlight>
                </View>
            )
        } else {
            return (
                <View>
                    <Text style={styles.welcome}>Welcome {this.state.name}</Text>
                    <ChatsDetail />
                    <View style={{ position: 'absolute', bottom: 0, paddingBottom: 20, paddingTop: 20, alignSelf: 'center', backgroundColor: '#FFF', width: width }}>
                        <TextInput
                            style={[styles.input, {alignSelf: 'center'}]}
                            value={this.state.chat}
                            onChangeText={chat => this.setState({ chat })}
                        />
                        <TouchableHighlight
                            style={[styles.button, {alignSelf: 'center'}]}
                            onPress={() => this.sendChat()}
                        >
                            <Text style={styles.textButton}>SEND</Text>
                        </TouchableHighlight>
                    </View>
                </View>


            )
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableHighlight
                    style={[styles.button, { position: 'absolute', top: 40 }]}
                    onPress={() => this.logout()}
                >
                    <Text style={styles.textButton}>Log Out</Text>
                </TouchableHighlight>
                {this.renderContent()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        width: width
    },
    button: {
        paddingTop: 12,
        paddingBottom: 12,
        width: width - 120,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ddd',
        backgroundColor: '#f1f1f1'
    },
    textButton: {
        color: '#555',
        fontSize: 18,
        alignSelf: 'center',
    },
    input: {
        marginBottom: 20,
        width: width - 120,
        paddingRight: 15,
        paddingLeft: 15,
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#AAA',
        color: '#555',
        fontSize: 18,
    },
    enterNameText: {
        marginBottom: 20,
        fontSize: 18
    },
    welcome: { 
        position: 'absolute', 
        top: 100, 
        marginBottom: 20, 
        fontSize: 20 
    }
})

