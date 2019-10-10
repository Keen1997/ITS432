import React, { Component } from 'react';
import { StyleSheet, Text, Image, View, Button, Dimensions } from 'react-native';

import Constants from 'expo-constants'
import * as Location from 'expo-location'
import * as Permissions from 'expo-permissions'

import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import { Platform } from '@unimodules/core';
var { width, height } = Dimensions.get('window')

const location = [13.764884, 100.538265, 0.005, 0.005] 

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      location: null,
      errorMessage: null,
      region: {
        latitude: location[0],
        longitude: location[1],
        latitudeDelta: location[2],
        longitudeDelta: location[3],
      },
      pin: {
        latitude: 13.764884,
        longitude: 100.538265,
      },
    }
    this.onRegionChangeComplete = this.onRegionChangeComplete.bind(this)
    this.onPressPinButton = this.onPressPinButton.bind(this)
  }

  onRegionChangeComplete(region) {
    this.setState({ region })
  }
  onPressPinButton(prevState) {
    this.setState({
      pin: {
        latitude: this.state.region.latitude, 
        longitude: this.state.region.longitude 
      }
    })
    this.refs.callout.showCallout()
  }
  componentWillMount() {
    if (Platform.OS === 'android' && !Constants.isDevice) {
      this.setState({
        errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!'
      })
    } else {
      this._getLocationAsync()
    }
  }
  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION)
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permissions to access location was denied'
      })
    }
    let location = await Location.getCurrentPositionAsync({})

    const region = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }

    this.setState({
      region: region,
      location: location,
    })
  }

  getJSXshow(error) {
    if(error) {
      return <Text style={styles.paragraph}>{this.state.errorMessage}</Text>
    } else {
      return <View style={styles.container}>
        <MapView style={styles.map}
          region={this.state.region}
          onRegionChangeComplete={this.onRegionChangeComplete}
        >
          <MapView.Marker 
            key={'key'}
            coordinate={{
              latitude: this.state.pin.latitude,
              longitude: this.state.pin.longitude,
            }}
            title='My location'
            description={'lat: '+this.state.region.latitude.toFixed(4)+', long: '+this.state.region.longitude.toFixed(4)}
            ref='callout'
          />
        </MapView>
        <View style={styles.container}>
            <Button
              style={{padding: 20}}
              title='Place a marker'
              onPress={this.onPressPinButton}
            />
        </View>
      </View>
    }
  }

  render() {
    let error
    if (this.state.errorMessage) { error = true }
    else if (this.state.errorMessage) { error = false }

    return (
      <View style={styles.container}>
        {this.getJSXshow(error)}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ECF0F1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: width,
    height: Math.floor(height * 2 / 3),
  },
  paragraph: {
    margin: 18,
    fontSize: 20,
    textAlign: 'center',
  }
});
