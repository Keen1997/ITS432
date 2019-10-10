import React from 'react'
import {
    View,
    Text,
    Button,
    Image,
    TouchableHighlight,
    TextInput
} from 'react-native'

class Test2 extends React.Component {
    componentDidMount() {
        this.changeName()
    }

    state = {
        name: 'Tek',
        color: 'red'
    }

    changeName = () => {
        this.setState({
            name: 'Benz'
        })
    }

    render() {
        let age = 22
        return (
            <View>
                <Text>{this.props.a}</Text>
                <Text>{this.props.b}</Text>
                <Text>{this.props.c}</Text>
                <Text
                    style={[styles.a, { color: this.state.color }]}
                >
                    {this.state.name + "hui"}
                </Text>
                <Button
                    onPress={() => this.changeName()}
                    title="change name"
                />
                <Button
                    onPress={() => this.setState({ color: 'blue' })}
                    title="change color"
                />
                <Image
                    source={require('./home.png')}
                />
                {/* <Image
                    style = {{
                        width: 100,
                        height: 250,
                        resizeMode: 'contain',
                    }}
                    source={{uri: 'https://image.flaticon.com/icons/png/512/97/97895.png'}}
                /> */}
                <TouchableHighlight
                    onPress={() => this.setState({ color: 'green' })}
                >
                    <Text>Green</Text>
                </TouchableHighlight>
                <TextInput 
                    style = {{
                        borderWidth: 1
                    }}
                    value = {this.state.color}
                    onChangeText = {(text) => this.setState({color: text})}
                />
            </View>
        )
    }
}

const styles = {
    a: {
        color: 'yellow',
        fontSize: 28
    }
}

export default Test2