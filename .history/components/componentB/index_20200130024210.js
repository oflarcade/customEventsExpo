import React, { Component } from 'react'
import { Text, View, DeviceEventEmitter } from 'react-native'

class Receiver extends Component {
    constructor(props) {
      super(props)
      this.state = {
         
      }
    }
    
    componentDidMount() {
        this.listener = DeviceEventEmitter.addListener("PLAYAUDIO",() => {
            console.log("WE ARE LISETNING FROM COMPONENT B");
        })
    }
  render() {
    return (
      <View>
        <Text> COMPONENT B </Text>
      </View>
    )
  }
}



export default Receiver