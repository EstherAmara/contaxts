/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import * as React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';

import AppNavContainer from './src/navigations';

const App = () => {

	return (
		<AppNavContainer />
	);
};

const styles = StyleSheet.create({

});

export default App;
