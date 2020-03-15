/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {View, StatusBar} from 'react-native';
import FlashMessage from 'react-native-flash-message';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import Router from './src/routes/router';
import {setCustomText, setCustomTextInput} from 'react-native-global-props';

const customTextProps = {
  style: {
    fontFamily: 'Cairo-SemiBold',
  },
};
setCustomText(customTextProps);
setCustomTextInput(customTextProps);
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={{flex: 1}}>
          <StatusBar hidden />
          <Router />
          <FlashMessage position="bottom" duration={5000} />
        </View>
      </Provider>
    );
  }
}
