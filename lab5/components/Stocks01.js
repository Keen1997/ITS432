import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import {
  LineChart,
} from 'react-native-chart-kit'

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [{
    data: [ 20, 45, 28, 80, 99, 43 ],
    color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // colar of the line
    strokeWidth: 2 // optional
  }]
}

const chartConfig = {
  backgroundGradientFrom: '#1E2923',
  backgroundGradientTo: '#08130D',
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`, // color of background
  strokeWidth: 2 // optional, default 3
}

export default class Stocks extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
        <LineChart
          data={data}
          width={Dimensions.get('window').width}
          height={220}
          chartConfig={chartConfig}
          style={{paddingVertical:10}}
        />
        </View>
        <View style={styles.footer}>
          <TouchableOpacity style={styles.button}>
            <Text>AAPL</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text>GOOGL</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text>UBER</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header:{
    flex:2,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: 'yellow'
  },
  footer:{
    flex:1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: 'pink'
  },
  button: {
    margin: 10,
    borderWidth: 1,
    width: 100,
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgray'
  }
});