import React, { Component } from 'react'
import { Text, View, DeviceEventEmitter } from 'react-native'
import EventEmitter from "eventemitter3";

class Receiver extends Component {
    constructor(props) {
      super(props)
      this.eventEmitter = new EventEmitter();
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