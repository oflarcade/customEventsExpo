import React, { Component } from "react";
import { Text, View, TouchableOpacity, StyleSheet, NativeEventEmitter, NativeModules } from "react-native";
import { EventRegister } from 'react-native-event-listeners'

class Emitter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  _emitEvent = () => {
    console.log("TRYING TO EMIT FROM COMPONENT A");
    EventRegister.emit("PLAYAUDIO", 'it works');
  }
  render() {
    return (
      <TouchableOpacity onPress={this._emitEvent} style={styles.container}>
        <Text> Press me to send Event </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 170,
    height: 50,
    backgroundColor: "blue",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 40
  }
});
export default Emitter;
