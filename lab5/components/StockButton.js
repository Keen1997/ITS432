import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

export default class StocksButton extends Component {
  render(){
    return(
      <TouchableOpacity style={styles.button}
        onPress={()=>{
          this.props.onPress(this.props.code, this.props.name)
        }}>
        <Text>{this.props.code}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button:{
    margin: 10,
    height: 50,
    width: 100,
    borderWidth: 1,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightgray'
  }
});