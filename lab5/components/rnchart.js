import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from 'react-native-chart-kit'

// install these packages first
// yarn add react-native-svg
// yarn add react-native-chart-kit

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

export default function App() {
  return (
    <View>
      <Text style={{paddingTop:30}}>
        Simple Line Chart
      </Text>
      <LineChart
        data={data}
        width={Dimensions.get('window').width}
        height={220}
        chartConfig={chartConfig}
        style={{paddingVertical:10}}
      />
      <Text>
        Bezier Line Chart
      </Text>
      <LineChart
        data={{
          labels: ['January', 'February', 'March', 'April', 'May', 'June'],
          datasets: [{
            data: [
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100
            ]
          }]
        }}
        width={Dimensions.get('window').width} // from react-native
        height={300}
        yAxisLabel={'$'}
        chartConfig={{
          backgroundColor: '#e26a00',
          backgroundGradientFrom: '#fb8c00',
          backgroundGradientTo: '#ffa726',
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16
          }
        }}
        bezier
        style={{
          paddingVertical: 10,
          borderRadius: 16
        }}
      />
    </View>
  );
}