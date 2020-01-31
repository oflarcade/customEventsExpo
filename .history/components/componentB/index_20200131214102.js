import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { EventRegister } from 'react-native-event-listeners'
class Receiver extends Component {
    constructor(props) {
      super(props)
      this.state = {
        data: 'No data',     
      }
    }
    
    componentDidMount() {
        this.listener = EventRegister.addEventListener("PLAYAUDIO",(data) => {
            console.log("WE ARE LISETNING FROM COMPONENT B");
            this.setState({data})
        })
    }


    componentWillMount() {
      EventRegister.removeEventListener(this.listener);
    }

  render() {
    const {data} = this.state;
    return (
      <View>
        <Text> {data} </Text>
      </View>
    )
  }
}



export default Receiver