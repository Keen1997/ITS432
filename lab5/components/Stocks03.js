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
import StockButton from './StockButton.js';
import Switch from './Switch'
import API from './api.js';

export default class Stocks extends Component {
  state = {
    data: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June'],
      datasets: [{
        data: [20, 45, 28, 80, 99, 43],
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // colar of the line
        strokeWidth: 2 // optional
      }]
    },
    chartConfig: {
      backgroundGradientFrom: '#1E2923',
      backgroundGradientTo: '#08130D',
      color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`, // color of background
      strokeWidth: 2 // optional, default 3
    },
    name: 'Apple',
    code: 'AAPL',
    period: 'DAILY',
    showPeriod: 'Weekly'
  }

  constructor(props) {
    super(props);
    this.changeIndex = this.changeIndex.bind(this);
  }

  showGraph(stockCode, stockName) {
    API(stockCode, this.state.period).then((data) => {
      let json = null
      console.log('*****************************************************************');
      console.log('the data is');
      if (this.state.period = 'DAILY') {
        json = data['Time Series (Daily)']
      } else {
        json = data['Time Series (Weekly)']
      }
      // console.log(json)
      let date = []
      let value = []

      for(let i=0; i<7; i++){
        console.log(Object.keys(json)[i])
        console.log(Object.values(json)[i]["3. low"])
        date.push(Object.keys(json)[i])
        value.push(Object.values(json)[i]["3. low"])
      }

      let currentData = this.state.data
      currentData.labels = date
      currentData.datasets[0]['data'] = value

      console.log(currentData);
      

      this.setState({
        data: currentData
      })

    }).catch((err) => {
      console.log(err);
      
    })
  }

  changeIndex(stockCode, stockName) {
    this.setState({
      name: stockName,
      code: stockCode
    })
    this.showGraph(stockCode, stockName)
  }

  changePeriod() {
    if (this.state.period == 'DAILY') this.setState({
      period: 'WEEKLY',
      showPeriod: 'Daily'
    })
    else this.setState({
      period: 'DAILY',
      showPeriod: 'Weekly'
    })

    this.showGraph(this.state.code, this.state.period)
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text>{this.state.name}</Text>
          <LineChart
            data={this.state.data}
            width={Dimensions.get('window').width}
            height={220}
            chartConfig={this.state.chartConfig}
            style={{ paddingVertical: 10 }}
          />
          <StockButton code={this.state.showPeriod} onPress={() => this.changePeriod()} />
        </View>
        <View style={styles.footer}>
          <StockButton code='AAPL' name='Apple' onPress={this.changeIndex} />
          <StockButton code='GOOGL' name='Google' onPress={this.changeIndex} />
          <StockButton code='UBER' name='Uber' onPress={this.changeIndex} />
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow'
  },
  footer: {
    flex: 1,
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