import React from 'react';
import { Text, View, TouchableHighlight } from 'react-native';

import styles from "../styles.js";

export class Toggler extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      isOn: props.isOn
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight style={styles.buttonContainer} onPress={this.callAPI.bind(this)} underlayColor="white">
            <View style={(this.state.isOn) ? styles.buttonOn : styles.buttonOff}>
              <Text style={styles.buttonText} >Toggle</Text>
            </View>
          </TouchableHighlight>
      </View>
    );
  }
  callAPI = (e) => {
    console.log(this.name);
  }
}

export default Toggler;
