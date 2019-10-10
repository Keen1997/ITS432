import React from 'react';
import { Text, View, TextInput, TouchableHighlight, StyleSheet } from 'react-native';
import { AntDesign, Entypo, MaterialCommunityIcons } from '@expo/vector-icons';

class Ex1 extends React.Component {
    state = {
        second: 0,
        minute: 0,
        counting: false,
        timeArray: []
    }

    count() {
        if (!this.state.counting) {
            this.timer = setInterval(() => {
                if (this.state.second == 59) {
                    this.setState({
                        second: 0,
                        minute: this.state.minute + 1
                    })
                } else {
                    this.setState({ second: this.state.second + 1 })
                }
            }, 1000)
            this.setState({ counting: true })
        } else {
            clearInterval(this.timer)
            this.setState({ counting: false })
        }
    }

    clear() {
        this.setState({
            second: 0,
            minute: 0,
            timeArray: []
        })
    }

    lap() {
        let array = this.state.timeArray
        array.unshift(('0' + this.state.minute).slice(-2) + ':' + ('0' + this.state.second).slice(-2))
        if (array.length > 5) {
            array.pop()
        }
        this.setState({
            timeArray: array
        })
    }

    renderPressButton() {
        if (!this.state.counting) {
            return (
                <AntDesign name="play" size={60} color="#37FDFC" />
            )
        } else {
            return (
                <AntDesign name="pause" size={60} color="#37FDFC" />
            )
        }
    }

    renderClearButton() {
        if (!this.state.counting && (this.state.second != 0 || this.state.minute != 0)) {
            return (
                <TouchableHighlight
                    style={styles.button}
                    onPress={() => this.clear()}
                >
                    <MaterialCommunityIcons name="loop" size={35} color="#37FDFC" />
                </TouchableHighlight>
            )
        } else {
            return (
                <View style={{ width: 125 }}></View>
            )
        }
    }

    renderLapButton() {
        if (this.state.second != 0 || this.state.minute != 0) {
            return (
                <TouchableHighlight
                    style={styles.button}
                    onPress={() => this.lap()}
                >
                    <Entypo name="flag" size={35} color="#37FDFC" />
                </TouchableHighlight>
            )
        } else {
            return (
                <View style={{ width: 125 }}></View>
            )
        }
    }

    renderLap() {
        return (
            this.state.timeArray.map((time, index) => (
                <Text key={index} style={styles.lapText}>{time}</Text>
            ))
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{ flex: 0.6, marginTop: 200 }}>
                    <View style={styles.timerContainer}>
                        <Text style={styles.timer}>{('0' + this.state.minute).slice(-2)}:{('0' + this.state.second).slice(-2)}</Text>
                    </View>
                    <View style={styles.buttonContainer}>
                        {this.renderClearButton()}
                        <TouchableHighlight
                            onPress={() => this.count()}
                            style={styles.button}
                        >
                            {this.renderPressButton()}
                        </TouchableHighlight>
                        {this.renderLapButton()}
                    </View>
                </View>
                <View style={{ flex: 0.4 }}>
                    {this.renderLap()}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },
    timerContainer: {
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        width: 200,
        height: 200,
        borderWidth: 3,
        borderRadius: 200,
        borderColor: '#37FDFC',
        marginBottom: 40,
    },
    timer: {
        fontSize: 32,
        color: '#37FDFC'
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    button: {
        width: 125,
        alignItems: 'center'
    },
    lapText: {
        fontSize: 20,
        color: '#FFF',
        marginBottom: 7
    }
})

export default Ex1
