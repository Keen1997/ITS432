// minimum working example for Switch
import React, { Component } from 'react';
import {
  Platform,StyleSheet,Text,View,Switch
} from 'react-native';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      switch : false
    }
  }

  render() {
    let message
    if (this.state.switch) {
      message = 'True';
    }
    else {
      message = 'False';
    }
    return (
      <View style={styles.container}>
        <Text style={{fontSize:30}}>{message}</Text>
        <Switch onValueChange={() => {
          this.setState({
            switch : !this.state.switch
          })
        }}
        value={this.state.switch}/>
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});