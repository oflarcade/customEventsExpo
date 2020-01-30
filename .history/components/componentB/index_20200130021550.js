import React, { Component } from 'react'
import { Text, View } from 'react-native'
import EventEmitter from "eventemitter3";

class Receiver extends Component {
    constructor(props) {
      super(props)
      this.eventEmitter = new EventEmitter();
      this.state = {
         
      }
    }
    
    componentDidMount() {
        this.eventEmitter.on("PLAYAUDIO",()=> {
            console.log('EVENT EMITTER LISTENER FROM COMPONENT B')
        })
    }
  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    )
  }
}

export default Receiver