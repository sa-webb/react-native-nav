import React, { Component } from 'react';
//import react in our code.

import { Alert, Button, View, StyleSheet } from 'react-native';
//import all the components we are going to use.

export default class Alarm extends Component {
  _simpleAlertHandler = () => {
    //function to make simple alert
    alert('Hello I am Simple Alert');
  };
  _twoOptionAlertHandler = () => {
    //function to make two option alert
    Alert.alert(
      //title
      'Hello',
      //body
      'I am two option alert. Do you want to cancel me ?',
      [
        { text: 'Yes', onPress: () => this._simpleAlertHandler },
        {
          text: 'No',
          onPress: () => console.log('No Pressed'),
          style: 'cancel',
        },
      ],
      { cancelable: false }
      //clicking out side of alert will not cancel
    );
  };
  _threeOptionAlertHandler = () => {
    //function to make three option alert
    Alert.alert(
      //title
      'Hello',
      //body
      'I am three option alert. Do you want to cancel me ?',
      [
        { text: 'May be', onPress: () => console.log('May be Pressed') },
        { text: 'Yes', onPress: () => console.log('Yes Pressed') },
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ],
      { cancelable: true }
    );
  };
  render() {
    return (
      <View style={styles.container}>
        {/*To generate simple alert*/}
        <Button title="Simple Alert" onPress={this._simpleAlertHandler} />

        {/*To generate two option alert*/}
        <Button
          title="Alert with Two Options"
          onPress={this._twoOptionAlertHandler}
        />

        {/*To generate three option alert*/}
        <Button
          title="Alert with Three Options"
          onPress={this._threeOptionAlertHandler}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
});
