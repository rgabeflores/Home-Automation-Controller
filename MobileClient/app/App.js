import React from 'react';
import { Text, View } from 'react-native';

import { Provider } from "react-redux";
import store from './redux/store';

import styles from './styles';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Text>IoT Controller</Text>
          <Toggler
            name={"LED Strip"}
            isOn={false}
          />
        </View>
      </Provider>
    );
  }
}
