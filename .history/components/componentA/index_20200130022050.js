import React, { Component } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import EventEmitter from "eventemitter3";
class Emitter extends Component {
  constructor(props) {
    super(props);
    this.eventEmitter = new EventEmitter();
    this.state = {};
  }

  componentDidMount() {}

  _emitEvent() {
    console.log("TRYING TO EMIT FROM COMPONENT A");
    this.eventEmitter.on("PLAYAUDIO");
    this.eventEmitter.emit("PLAYAUDIO");
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
    alignItems: "center"
  }
});
export default Emitter;
