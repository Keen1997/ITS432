import React from 'react';
import { Text, View, TextInput, TouchableHighlight, StyleSheet } from 'react-native';

class Ex1 extends React.Component {
    state = {
        weight: null,
        height: null,
        BMI: null,
        status: null,
        color: null
    }

    calculate() {
        let BMI = (this.state.weight/((this.state.height/100)^2)).toFixed(2)
        if(BMI>24.9){
            this.setState({
                status: 'Obese',
                color: 'red'
            })
        } else if(BMI>23 && BMI<24.9){
            this.setState({
                status: 'Overweight',
                color: 'yellow'
            })
        } else if(BMI>18.5 && BMI<22.9){
            this.setState({
                status: 'Healthy',
                color: 'green'
            })
        } else{
            this.setState({
                status: 'Underweight',
                color: 'orange'
            })
        } 
        this.setState({BMI: BMI})
    }

    render() {
        return (
            <View>
                <Text>Weight (kg.)</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => this.setState({weight: text})}
                />
                <Text>Height (cm.)</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => this.setState({height: text})}
                />
                <TouchableHighlight
                    style={styles.button}
                    onPress={() => this.calculate()}
                >
                    <Text style={{fontSize: 16, color: '#FFF'}}>Calculate</Text>
                </TouchableHighlight>

                <Text style={styles.result}>{this.state.BMI}</Text>
                <Text style={[styles.result, { color: this.state.color }]}>{this.state.status}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    input: {
        width: 200, 
        borderColor: 'gray', 
        borderWidth: 1,
        borderRadius: 4,
        marginTop: 5,
        marginBottom: 15,
        padding: 5,
        fontSize: 16
    },
    button: {
        height: 40,
        width: 200, 
        borderColor: '#428bca', 
        borderWidth: 1,
        borderRadius: 4,
        marginTop: 10,
        marginBottom: 25,
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#428bca',
    },
    result: {
        fontSize: 20,
        alignSelf: 'center',
        fontWeight: 'bold'
    }
})

export default Ex1
